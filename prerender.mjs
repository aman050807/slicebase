// Build-time prerender: injects the rendered app into dist/index.html so
// crawlers, link previews and no-JS tools see the real page content.
import { readFileSync, writeFileSync } from "node:fs";
const { render } = await import("./dist-ssr/entry-server.js");
const html = readFileSync("dist/index.html", "utf8");
const app = render();
writeFileSync(
  "dist/index.html",
  html.replace('<div id="root"></div>', `<div id="root">${app}</div>`),
);
console.log("prerendered chars:", app.length);
