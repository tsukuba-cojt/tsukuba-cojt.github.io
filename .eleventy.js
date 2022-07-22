const fg = require("fast-glob");
const { basename, dirname } = require("path");
const Image = require("@11ty/eleventy-img");
const postcss = require("postcss");
const postcssrc = require("postcss-load-config");

const optimizeImages = async () => {
  const images = await fg(["src/**/*.{jpeg,jpg,png,webp,gif,tiff,avif,svg}"], {
    ignore: ["docs", "**/node_modules"],
  });
  for (const image of images) {
    await Image(image, {
      filenameFormat: () => basename(image),
      formats: [null],
      sharpOptions: {
        animated: true,
      },
      outputDir: dirname(image).replace(/^src/, "docs"),
    });
  }
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("formatDate", (date) =>
    date.toLocaleDateString("ja-JP")
  );
  eleventyConfig.addNunjucksAsyncFilter("postcss", (css, callback) =>
    postcssrc().then(({ plugins, options }) => {
      postcss(plugins)
        .process(css, options)
        .then(
          (result) => callback(null, result.css),
          (error) => callback(error, null)
        );
    })
  );
  eleventyConfig.addWatchTarget("src/style/**/*.{css,scss,pcss}");
  eleventyConfig.addPassthroughCopy("src/!(_*)/**/*.{ico,js,mp4,webm,pdf}");
  eleventyConfig.on("beforeBuild", optimizeImages);
  eleventyConfig.addPassthroughCopy(".nojekyll");

  eleventyConfig.addShortcode("student_by_id", function (students, ids) {
    const res = [];
    students.forEach((student) => {
      ids.forEach((id) => {
        if (id === student.id) {
          res.push(student);
        }
      });
    });
    let resHTML = "<ul>";
    res.forEach(
      (st) =>
        (resHTML += `<li><a href="/students/${st.id}">${st.name}</a></li>`)
    );
    return resHTML + "</ul>";
  });

  eleventyConfig.addShortcode("conv_term_to_ja", (term) => {
    switch (term) {
      case "spring":
        return "春学期";
      case "fall":
        return "秋学期";
      default:
        return "";
    }
  });

  eleventyConfig.addShortcode("conv_course_to_ja", (course) => {
    switch (course) {
      case "sw":
        return "ソフトウェアコース";
      case "hw":
        return "ハードウェアコース";
      default:
        return "";
    }
  });

  eleventyConfig.addShortcode(
    "related_sameyear_results",
    (results, year, term) => {
      let filterResults = "";
      results.forEach((result) => {
        if (result.data.year === year && result.data.term === term) {
          filterResults += `<li><a href="${result.url}">${result.data.title}</a></li>`;
        }
      });
      return filterResults;
    }
  );

  return {
    pathPrefix: "",
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
