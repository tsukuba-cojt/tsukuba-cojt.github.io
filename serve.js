const handler = require("serve-handler");
const http = require("http");

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "docs",
  });
});

const port = process.env.PORT ?? 8080;
const baseUrl = process.env.BASE_URL ?? "http://localhost";

server.listen(port, () => {
  console.log(`Running at ${baseUrl}:${port}`);
});
