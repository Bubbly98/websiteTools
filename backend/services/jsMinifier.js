function minifyJS(js) {

    if (!js) {
      return "";
    }
  
    return js
  
      // remove single line comments
      .replace(/\/\/.*$/gm, "")
  
      // remove extra spaces
      .replace(/\s+/g, " ")
  
      // trim
      .trim();
  }
  
  module.exports = minifyJS;