function minifyCSS(css) {
    

    if (!css) {
      return "";
    }
  
    return css
  
      // remove comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
  
      // remove extra spaces
      .replace(/\s+/g, " ")
  
      // remove spaces around symbols
      .replace(/\s*([{}:;,])\s*/g, "$1")
  
      // remove final spaces
      .trim();
  }
  
  module.exports = minifyCSS;