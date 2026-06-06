import { useState } from "react";
import "./App.css";

import {
  FaCompress,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaRocket,
  FaTags,
  FaRobot,
  FaSitemap,
  FaFileAlt,
  FaTools
} from "react-icons/fa";

function App() {
  const [selectedTool, setSelectedTool] =
    useState("image");

  const [cssInput, setCssInput] =
    useState("");
  
  const [cssOutput, setCssOutput] =
    useState("");

  const [jsInput, setJsInput] =
    useState("");
  
  const [jsOutput, setJsOutput] =
    useState("");

  const [htmlInput, setHtmlInput] =
    useState("");
  
  const [htmlOutput, setHtmlOutput] =
    useState("");

  const [textInput, setTextInput] =
    useState("");
  
  const [textOutput, setTextOutput] =
    useState("");
  
  const [metaTitle, setMetaTitle] =
    useState("");
  
  const [
    metaDescription,
    setMetaDescription
  ] = useState("");
  
  const [
    metaKeywords,
    setMetaKeywords
  ] = useState("");
  
  const [
    metaOutput,
    setMetaOutput
  ] = useState("");

  const [
    sitemapUrl,
    setSitemapUrl
  ] = useState("");
  
  const [
    robotsOutput,
    setRobotsOutput
  ] = useState("");

  const [
    sitemapInput,
    setSitemapInput
  ] = useState("");
  
  const [
    sitemapOutput,
    setSitemapOutput
  ] = useState("");

  const [
    selectedImage,
    setSelectedImage
  ] = useState(null);
  
  const [
    imageResult,
    setImageResult
  ] = useState(null);

  const [
    websiteUrl,
    setWebsiteUrl
  ] = useState("");
  
  const [
    performanceResults,
    setPerformanceResults
  ] = useState([]);

  const [activeButton, setActiveButton] =
  useState("");


  const tools = [
    {
      id: "image",
      title: "Image Compressor",
      icon: <FaCompress />,
      description:
        "Reduce image size while maintaining quality."
    },
    {
      id: "css",
      title: "CSS Minifier",
      icon: <FaCss3Alt />,
      description:
        "Minify CSS files for better performance."
    },
    {
      id: "js",
      title: "JavaScript Minifier",
      icon: <FaJs />,
      description:
        "Compress JavaScript code instantly."
    },
    {
      id: "html",
      title: "HTML Minifier",
      icon: <FaHtml5 />,
      description:
        "Reduce HTML file size and improve loading."
    },
    {
      id: "performance",
      title: "Performance Advisor",
      icon: <FaRocket />,
      description:
        "Receive website optimization suggestions."
    },
    {
      id: "meta",
      title: "Meta Tag Generator",
      icon: <FaTags />,
      description:
        "Generate SEO meta tags quickly."
    },
    {
      id: "robots",
      title: "Robots.txt Generator",
      icon: <FaRobot />,
      description:
        "Create robots.txt files easily."
    },
    {
      id: "sitemap",
      title: "Sitemap Generator",
      icon: <FaSitemap />,
      description:
        "Generate XML sitemaps for search engines."
    },
    {
      id: "text",
      title: "Text → HTML",
      icon: <FaFileAlt />,
      description:
        "Convert plain text into structured HTML."
    }
  ];

  const handleCSSMinify = async () => {
    setActiveButton("css");

    if (!cssInput.trim()) {
      alert("Please enter CSS code");
      return;
    }
  
    try {
  
      const response =
        await fetch(
          "https://website-tools-jlfb.vercel.app/api/tools/css-minifier",
          {
            method: "POST",
  
            headers: {
              "Content-Type":
                "application/json"
            },
  
            body: JSON.stringify({
              css: cssInput
            })
          }
        );

      console.log(response);

      const data =
        await response.json();

      console.log(data);
  
      if (data.success) {
  
        setCssOutput(
          data.minifiedCSS
        );
  
      }
  
    } catch (error) {
  
      console.error(error);
  
      alert(
        "Failed to minify CSS"
      );
  
    }
  };

  const handleJSMinify = async () => {
    setActiveButton("js");

    if (!jsInput.trim()) {
      alert("Please enter JavaScript");
      return;
    }
  
    try {
  
      const response =
        await fetch(
          "https://website-tools-jlfb.vercel.app/api/tools/js-minifier",
          {
            method: "POST",
  
            headers: {
              "Content-Type":
                "application/json"
            },
  
            body: JSON.stringify({
              js: jsInput
            })
          }
        );

      console.log(response);
  
      const data =
        await response.json();
      
      console.log(data);
  
      if (data.success) {
  
        setJsOutput(
          data.minifiedJS
        );
  
      }
  
    } catch (error) {
  
      console.error(error);
  
      alert(
        "Failed to minify JavaScript"
      );
  
    }
  
  };

  const handleHTMLMinify = async () => {
    setActiveButton("html");

    if (!htmlInput.trim()) {
      alert("Please enter HTML");
      return;
    }
  
    try {
  
      const response =
        await fetch(
          "https://website-tools-jlfb.vercel.app/api/tools/html-minifier",
          {
            method: "POST",
  
            headers: {
              "Content-Type":
                "application/json"
            },
  
            body: JSON.stringify({
              html: htmlInput
            })
          }
        );

      console.log(response);

      const data =
        await response.json();
      
      console.log(data);
  
      if (data.success) {
  
        setHtmlOutput(
          data.minifiedHTML
        );
  
      }
  
    } catch (error) {
  
      console.error(error);
  
      alert(
        "Failed to minify HTML"
      );
  
    }
  
  };

  const handleTextToHtml = async () => {
    setActiveButton("text");

    if (!textInput.trim()) {

      alert(
        "Please enter text"
      );

      return;
    }

    try {

      const response =
        await fetch(
          "https://website-tools-jlfb.vercel.app/api/tools/text-to-html",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              text: textInput
            })
          }
        );

      console.log(response);

      const data =
        await response.json();

      console.log(data);

      if (data.success) {

        setTextOutput(
          data.html
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Conversion failed"
      );

    }

  };

const handleMetaGenerator = async () => {
  setActiveButton("meta");

  try {

    const response =
      await fetch(
        "https://website-tools-jlfb.vercel.app/api/tools/meta-generator",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            title:
              metaTitle,

            description:
              metaDescription,

            keywords:
              metaKeywords

          })
        }
      );

    console.log(response);

    const data =
      await response.json();
    
    console.log(metaTitle);
    console.log(metaDescription);
    console.log(metaKeywords);


    if (data.success) {

      setMetaOutput(
        data.metaTags
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Meta tag generation failed"
    );

  }

};

const handleRobotsGenerator = async () => {
  setActiveButton("robots");

  if (!sitemapUrl.trim()) {

    alert(
      "Please enter sitemap URL"
    );

    return;
  }

  try {

    const response =
      await fetch(
        "https://website-tools-jlfb.vercel.app/api/tools/robots-generator",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            sitemapUrl
          })
        }
      );

    const data =
      await response.json();

    if (data.success) {

      setRobotsOutput(
        data.robotsTxt
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Generation failed"
    );

  }

};

const handleSitemapGenerator = async () => {
  setActiveButton("sitemap");

  if (!sitemapInput.trim()) {

    alert(
      "Please enter URLs"
    );

    return;
  }

  try {

    const response =
      await fetch(
        "https://website-tools-jlfb.vercel.app/api/tools/sitemap-generator",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            urls: sitemapInput
          })
        }
      );

    console.log(response);

    const data =
      await response.json();
    
    console.log(data);


    if (data.success) {

      setSitemapOutput(
        data.sitemap
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Sitemap generation failed"
    );

  }

};

const handleImageCompression = async () => {
  setActiveButton("image");

  if (!selectedImage) {

    alert(
      "Please choose image"
    );

    return;
  }

  const formData =
    new FormData();

  formData.append(
    "image",
    selectedImage
  );

  try {

    const response =
      await fetch(
        "https://website-tools-jlfb.vercel.app/api/tools/image-compressor",
        {
          method:"POST",
          body:formData
        }
      );

    console.log(response);

    const data =
      await response.json();
    
    console.log(data);


    if (
      data.success
    ) {

      setImageResult(
        data
      );

    }

  } catch(error){

    console.error(
      error
    );

  }

};

const handlePerformanceAnalysis = async () => {
  setActiveButton("performance");

  try {

    const response =
      await fetch(
        "https://website-tools-jlfb.vercel.app/api/tools/performance-advisor",
        {
          method:"POST",

          headers:{
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({

              websiteUrl

            })

        }
      );

    console.log(response);

    const data =
      await response.json();

    console.log(data);


    if(
      data.success
    ){

      setPerformanceResults(
        data.findings
      );

    }

  } catch(error){

    console.error(
      error
    );

  }

};

  const getToolContent = () => {
    switch (selectedTool) {
      case "image":
        return (
          <>

            <h2>
              Image Compression Tool
            </h2>

            <p>
              Upload JPG, PNG,
              JPEG or WEBP images
              and reduce file size.
            </p>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={(e)=>
                setSelectedImage(
                  e.target.files[0]
                )
              }
            />

            <br />
            <br />

            <button
              className={`toolButton ${
                activeButton === "css"
                  ? "toolButtonActive"
                  : ""
              }`}
              
              onClick={
                handleImageCompression
              }
            >
              {activeButton === "image"
                ? "Completed"
                : "Compress"}
            </button>

            {imageResult && (

              <div className="resultBox">

                <h3>
                  Compression Result
                </h3>

                <p>
                  Original Size:
                  {" "}
                  {
                    (
                      imageResult.originalSize
                      /
                      1024
                    ).toFixed(2)
                  }
                  KB
                </p>

                <p>
                  Compressed Size:
                  {" "}
                  {
                    (
                      imageResult.compressedSize
                      /
                      1024
                    ).toFixed(2)
                  }
                  KB
                </p>

                <p>
                  Reduction:
                  {" "}
                  {
                    imageResult.reduction
                  }
                  %
                </p>

                <a
                  href={`data:image/jpeg;base64,${imageResult.imageData}`}
                  download="compressed-image.jpg"
                >
                  <button
                    className="copyBtn tooltip"
                  >
                    Download Image

                    <span className="tooltipText">
                      Download Compressed File
                    </span>

                  </button>
                </a>

              </div>

            )}

          </>
        );

      case "css":
        return (
          <>
      
            <h2>CSS Minifier</h2>
      
            <p>
              Remove comments, extra spaces
              and unnecessary formatting
              from CSS code.
            </p>
      
            <textarea
              className="toolTextarea"
              placeholder="Paste CSS code here..."
              value={cssInput}
              onChange={(e) =>
                setCssInput(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "css"
                  ? "toolButtonActive"
                  : ""
              }`}
              onClick={handleCSSMinify}
            >
              Minify CSS
            </button>
      
            {cssOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Minified Output
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={cssOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      cssOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>


                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "js":
        return (
          <>
      
            <h2>
              JavaScript Minifier
            </h2>
      
            <p>
              Compress JavaScript code
              and remove unnecessary
              formatting.
            </p>
      
            <textarea
              className="toolTextarea"
              placeholder="Paste JavaScript code..."
              value={jsInput}
              onChange={(e) =>
                setJsInput(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "js"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={handleJSMinify}
            >
              Minify JavaScript
            </button>
      
            {jsOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Minified Output
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={jsOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      jsOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "html":
        return (
          <>
      
            <h2>HTML Minifier</h2>
      
            <p>
              Remove comments, extra spaces,
              and unnecessary formatting from
              HTML code to improve page loading
              and reduce file size.
            </p>
      
            <textarea
              className="toolTextarea"
              placeholder="Paste HTML code here..."
              value={htmlInput}
              onChange={(e) =>
                setHtmlInput(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "html"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={handleHTMLMinify}
            >
              Minify HTML
            </button>
      
            {htmlOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Minified Output
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={htmlOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      htmlOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "performance":
        return (
          <>
      
            <h2>
              Performance Optimization Suggestions
            </h2>
      
            <p>
              Analyze a website and
              receive performance
              improvement recommendations.
            </p>
      
            <input
              className="toolInput"
              placeholder="https://example.com"
              value={websiteUrl}
              onChange={(e)=>
                setWebsiteUrl(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "performance"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={
                handlePerformanceAnalysis
              }
            >
              Analyze Website
            </button>
      
            {performanceResults.length > 0 && (
      
              <div className="resultBox">
      
                <h3>
                  Optimization Report
                </h3>
      
                {performanceResults.map(
                  (
                    item,
                    index
                  ) => (
      
                    <div
                      key={index}
                      style={{
                        marginBottom:
                          "20px"
                      }}
                    >
      
                      <strong>
                        {item.issue}
                      </strong>
      
                      <p>
                        {
                          item.recommendation
                        }
                      </p>
      
                    </div>
      
                  )
                )}
      
              </div>
      
            )}
      
          </>
        );

      case "meta":
        return (
          <>
      
            <h2>
              Meta Tag Generator
            </h2>
      
            <p>
              Generate SEO-friendly
              meta tags for your website.
            </p>
      
            <input
              className="toolInput"
              placeholder="Page Title"
              value={metaTitle}
              onChange={(e) =>
                setMetaTitle(
                  e.target.value
                )
              }
            />
      
            <input
              className="toolInput"
              placeholder="Meta Description"
              value={metaDescription}
              onChange={(e) =>
                setMetaDescription(
                  e.target.value
                )
              }
            />
      
            <input
              className="toolInput"
              placeholder="Keywords"
              value={metaKeywords}
              onChange={(e) =>
                setMetaKeywords(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "meta"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={
                handleMetaGenerator
              }
            >
              Generate Meta Tags
            </button>
      
            {metaOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Generated Meta Tags
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={metaOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      metaOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "robots":
        return (
          <>
      
            <h2>
              Robots.txt Generator
            </h2>
      
            <p>
              Generate a robots.txt file
              for search engine crawlers.
            </p>
      
            <input
              className="toolInput"
              placeholder="https://example.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) =>
                setSitemapUrl(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "robots"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={
                handleRobotsGenerator
              }
            >
              Generate Robots.txt
            </button>
      
            {robotsOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Generated robots.txt
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={robotsOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      robotsOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "sitemap":
        return (
          <>
      
            <h2>
              Sitemap Generator
            </h2>
      
            <p>
              Enter website Link
              (one URL / page link per line)
              to generate an XML sitemap.
            </p>
      
            <textarea
              className="toolTextarea"
              placeholder={`https://example.com
                https://example.com/about
                https://example.com/services
                https://example.com/contact`}
              value={sitemapInput}
              onChange={(e) =>
                setSitemapInput(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "sitemap"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={
                handleSitemapGenerator
              }
            >
              Sitemap Generated Successfully
            </button>
      
            {sitemapOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Generated Sitemap XML
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={sitemapOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      sitemapOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      case "text":
        return (
          <>
      
            <h2>
              Text to HTML Converter
            </h2>
      
            <p>
              Convert plain text into
              structured HTML paragraphs.
            </p>
      
            <textarea
              className="toolTextarea"
              placeholder={`FORMATTING GUIDE
                # Main Heading

                ## Sub Heading
                
                - Bullet Item
                
                1. Numbered Item
                
                https://example.com
                
                support@example.com
                
                Normal text becomes paragraphs...`}
              value={textInput}
              onChange={(e) =>
                setTextInput(
                  e.target.value
                )
              }
            />
      
            <button
              className={`toolButton ${
                activeButton === "text"
                  ? "toolButtonActive"
                  : ""
              }`}
            
              onClick={handleTextToHtml}
            >
              Convert to HTML
            </button>
      
            {textOutput && (
      
              <div className="resultBox">
      
                <h3>
                  Generated HTML
                </h3>
      
                <textarea
                  className="toolTextarea"
                  value={textOutput}
                  readOnly
                />
      
                <button
                  className="copyBtn tooltip"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      textOutput
                    )
                  }
                >
                  Copy Result
                  <span className="tooltipText">
                    Copy to Clipboard
                  </span>
                </button>
      
              </div>
      
            )}
      
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page">

      {/* NAVBAR */}

      <div className="topbar">

        <div className="logo">
          WebAudit <span>X</span>
        </div>

        <div className="navLinks">
          <p>Overview</p>
          <p>Analysis</p>
          <p>Issues</p>
          <p className="activeNav">
            Tools
          </p>
        </div>

        <div className="topButtons">
          <button className="signBtn">
            Sign In
          </button>

          <button className="auditBtn">
            Start Free Audit
          </button>
        </div>

      </div>

      {/* HERO */}

      <div className="hero">

        <div className="toolBadge">
          <FaTools />
          <span>
            9 Professional Optimization Tools
          </span>
        </div>

        <h1>
          Website Optimization
          <span> Tools Suite</span>
        </h1>

        <p className="heroText">
          Compress images, optimize code,
          improve SEO and generate website
          resources with easy-to-use tools.
        </p>

      </div>

      {/* STATS */}

      <div className="statsContainer">

        <div className="statCard">
          <h2>9</h2>
          <p>Optimization Tools</p>
        </div>

        <div className="statCard">
          <h2>SEO</h2>
          <p>Enhancement Utilities</p>
        </div>

        <div className="statCard">
          <h2>Fast</h2>
          <p>Performance Improvements</p>
        </div>

        <div className="statCard">
          <h2>Easy</h2>
          <p>For Non-Technical Users</p>
        </div>

      </div>

      {/* TOOL GRID */}

      <div className="toolsGrid">

        {tools.map((tool) => (

          <div
            key={tool.id}
            className={`toolCard ${
              selectedTool === tool.id
                ? "activeTool"
                : ""
            }`}
            onClick={() =>
              setSelectedTool(tool.id)
            }
          >

            <div className="toolIcon">
              {tool.icon}
            </div>

            <h3>{tool.title}</h3>

            <p>
              {tool.description}
            </p>

          </div>

        ))}

      </div>

      {/* WORKSPACE */}

      <div className="workspaceCard">

        <div className="workspaceHeader">

          <h1>
            Current Tool Workspace
          </h1>

          <p>
            Select a tool above and
            start optimizing your website.
          </p>

        </div>

        <div className="workspaceBody">
          {getToolContent()}
        </div>

      </div>

    </div>
  );
}

export default App;