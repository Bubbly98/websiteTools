function minifyHTML(html) {

    if (!html) {
      return "";
    }
  
    return html
  
      // remove comments
      .replace(/<!--[\s\S]*?-->/g, "")
  
      // remove spaces between tags
      .replace(/>\s+</g, "><")
  
      // remove extra spaces
      .replace(/\s+/g, " ")
  
      .trim();
  }
  
  module.exports = minifyHTML;