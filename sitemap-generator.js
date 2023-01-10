import fs from "fs";
import prettier from "prettier";
import globby from "globby";

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierc.js");
  const pages = await globby([
    "pages/*.js",
    "content/**/*.mdx",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://localhost:3000</loc>
</url>
${pages
  ?.map((page) => {
    const path = page
      .replace("pages", "")
      .replace("content", "")
      .replace(".js", "")
      .replace("mdx", "");

    const route = path === "/index" ? "" : path;

    if (path === "/404") {
      return;
    }
    return `<url> 
    <loc>${`http://localhost:3000${route}`}</loc>
  </url>`;
  })
  .join("")}
<lastmod>2023-01-10</lastmod>

</urlset>`;

  const formated = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formated);
})();
