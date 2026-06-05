const express =
  require("express");

const router =
  express.Router();

const upload =
  require(
    "../services/imageUpload"
  );

const {
  cssMinifier,
  jsMinifier,
  htmlMinifier,
  convertTextToHtml,
  metaTagGenerator,
  robotsGenerator,
  sitemapGenerator,
  imageCompressor,
  performanceAdvisor
} = require(
  "../controllers/toolsController"
);

router.post(
  "/css-minifier",
  cssMinifier
);

router.post(
  "/js-minifier",
  jsMinifier
);

router.post(
  "/html-minifier",
  htmlMinifier
);

router.post(
  "/text-to-html",
  convertTextToHtml
);

router.post(
  "/meta-generator",
  metaTagGenerator
);

router.post(
  "/robots-generator",
  robotsGenerator
);

router.post(
  "/sitemap-generator",
  sitemapGenerator
);

router.post(

  "/image-compressor",

  upload.single(
    "image"
  ),

  imageCompressor

);

router.post(
  "/performance-advisor",
  performanceAdvisor
);

module.exports = router;