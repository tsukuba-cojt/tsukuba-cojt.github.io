---
layout: root
tags: results
title: MITSUKO
year: 2022
term: spring
icon: "/image/result-icon-sample.png"
cover: "/image/result-cover-sample.png"
description: COCOAアプリをインストールしてるスマホを検知して密をお知らせします．
repositories:
  [
    "https://github.com/tsukuba-cojt/.github",
    "https://github.com/tuqulore/vue-3-practices",
  ]
students: [123456789, 123456781]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

自由記述、マークダウン、html, nunjucks形式が使えるので、それぞれWebページを作成してください。

### Youtube埋め込み例

以下のように '.youtube' クラスでラップしてiframeタグを埋め込んでください。（はみ出し等防止）

```
<div class="youtube">
  <iframe width="560" height="315" src="xxxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c-l7xawEoDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
