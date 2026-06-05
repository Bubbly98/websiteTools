function generateMetaTags(
    title,
    description,
    keywords
  ) {
  
    return `
  <title>${title}</title>
  
  <meta name="description"
  content="${description}">
  
  <meta name="keywords"
  content="${keywords}">
  `;
  }
  
  module.exports =
    generateMetaTags;