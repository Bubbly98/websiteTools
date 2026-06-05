const minifyCSS =
  require("../services/cssMinifier");

const minifyJS =
  require("../services/jsMinifier");

const minifyHTML =
  require("../services/htmlMinifier");

const textToHtml =
  require("../services/textToHtml");

const generateMetaTags =
  require(
    "../services/metaTagGenerator"
  );

const generateRobotsTxt =
  require("../services/robotsGenerator");

const generateSitemap =
  require(
    "../services/sitemapGenerator"
  );

const compressImage =
  require(
    "../services/imageCompressor"
  );

const analyzePerformance =
  require(
    "../services/performanceAdvisor"
  );

exports.cssMinifier =
  async (req, res) => {

  try {

    const { css } = req.body;

    const result =
      minifyCSS(css);

    res.status(200).json({
      success: true,
      minifiedCSS: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "CSS minification failed"
    });

  }
};

exports.jsMinifier =
  async (req, res) => {

  try {

    const { js } = req.body;

    const result =
      minifyJS(js);

    res.status(200).json({
      success: true,
      minifiedJS: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "JavaScript minification failed"
    });

  }

};

exports.htmlMinifier =
  async (req, res) => {

  try {

    const { html } = req.body;

    const result =
      minifyHTML(html);

    res.status(200).json({
      success: true,
      minifiedHTML: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "HTML minification failed"
    });

  }

};

exports.convertTextToHtml =
  async (req, res) => {

  try {

    const { text } = req.body;

    const result =
      textToHtml(text);

    res.status(200).json({
      success: true,
      html: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Text conversion failed"
    });

  }

};

exports.metaTagGenerator =
  async (req, res) => {

  try {

    const {
      title,
      description,
      keywords
    } = req.body;

    const result =
      generateMetaTags(
        title,
        description,
        keywords
      );

    res.status(200).json({
      success: true,
      metaTags: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Meta tag generation failed"
    });

  }

};

exports.robotsGenerator =
  async (req, res) => {

  try {

    const { sitemapUrl } =
      req.body;

    const result =
      generateRobotsTxt(
        sitemapUrl
      );

    res.status(200).json({
      success: true,
      robotsTxt: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Robots.txt generation failed"
    });

  }

};

exports.sitemapGenerator =
  async (req, res) => {

  try {

    const { urls } =
      req.body;

    const result =
      generateSitemap(
        urls
      );

    res.status(200).json({
      success: true,
      sitemap: result
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Sitemap generation failed"
    });

  }

};

exports.imageCompressor =
  async (req, res) => {

  try {

    if (!req.file) {

      return res
        .status(400)
        .json({

          success:false,

          message:
            "No image uploaded"

        });

    }

    const result =
      await compressImage(
        req.file
      );

    res.status(200).json({

      success:true,

      ...result

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success:false,

      message:
        "Image compression failed"

    });

  }

};

exports.performanceAdvisor =
  async (req, res) => {

  try {

    const {
      websiteUrl
    } = req.body;

    const findings =
      await analyzePerformance(
        websiteUrl
      );

    res.status(200).json({

      success:true,

      findings

    });

  } catch(error){

    console.error(error);

    res.status(500).json({

      success:false,

      message:
        "Performance analysis failed"

    });

  }

};