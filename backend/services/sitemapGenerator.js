function generateSitemap(urls) {

    const urlArray =
      urls
        .split("\n")
        .filter(
          url => url.trim() !== ""
        );
  
    const sitemapEntries =
      urlArray.map((url, index) => {
  
        const priority =
          index === 0
            ? "1.0"
            : "0.8";
  
        const frequency =
          index === 0
            ? "weekly"
            : "monthly";
  
        return `
    <url>
      <loc>${url.trim()}</loc>
      <changefreq>${frequency}</changefreq>
      <priority>${priority}</priority>
    </url>`;
      });
  
    return `<?xml version="1.0" encoding="UTF-8"?>
  
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries.join("")}
  </urlset>`;
  }
  
  module.exports =
    generateSitemap;