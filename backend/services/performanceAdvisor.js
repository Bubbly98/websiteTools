const axios =
  require("axios");

const cheerio =
  require("cheerio");

async function analyzePerformance(
  websiteUrl
) {

  const findings = [];

  try {

    const response =
      await axios.get(
        websiteUrl
      );

    const $ =
      cheerio.load(
        response.data
      );

    const images =
      $("img");

    const cssFiles =
      $('link[rel="stylesheet"]');

    const jsFiles =
      $("script[src]");

    if (
      images.length > 10
    ) {

      findings.push({

        issue:
          "Large Number of Images",

        recommendation:
          "Compress images and use modern formats such as WebP."

      });

    }

    if (
      cssFiles.length > 3
    ) {

      findings.push({

        issue:
          "Multiple CSS Files",

        recommendation:
          "Minify and combine CSS resources."

      });

    }

    if (
      jsFiles.length > 5
    ) {

      findings.push({

        issue:
          "Multiple JavaScript Files",

        recommendation:
          "Minify and bundle JavaScript files."

      });

    }

    const lazyImages =
      $('img[loading="lazy"]');

    if (
      images.length >
      lazyImages.length
    ) {

      findings.push({

        issue:
          "Missing Lazy Loading",

        recommendation:
          'Add loading="lazy" to images.'

      });

    }

    if (
      cssFiles.length +
      jsFiles.length >
      15
    ) {

      findings.push({

        issue:
          "High Number of Requests",

        recommendation:
          "Reduce resource requests where possible."

      });

    }

    if (findings.length === 0) {

      findings.push({
    
        status: "success",

        issue: "No Major Performance Issues Detected",

        recommendation:
          "This website appears to follow good performance practices."
    
      });
    
    }

    return findings;

  } catch(error){

    throw error;

  }

}

module.exports =
  analyzePerformance;