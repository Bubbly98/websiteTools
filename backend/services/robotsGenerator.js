function generateRobotsTxt(sitemapUrl) {

    return `User-agent: *
  
  Allow: /
  
  Disallow: /admin/
  
  Disallow: /private/
  
  Sitemap: ${sitemapUrl}`;
  }
  
  module.exports = generateRobotsTxt;