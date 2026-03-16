import React, { useState } from "react";
import axios from "axios";
import "./mobile_friendly_styles.css";

function MobileFriendly() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const runAudit = async () => {

    if (!url) {
      alert("Please enter a website URL");
      return;
    }

    try {

      setLoading(true);
      setResult(null);

      const response = await axios.post(
        "http://localhost:5000/api/mobile-friendly",
        { url: url }
      );

      setResult(response.data);

    } catch (error) {

      alert("Failed to run mobile audit");

    } finally {

      setLoading(false);

    }

  };

  const calculateScore = () => {

    if (!result) return 0;

    let score = 0;

    if (result.fontSizeCheck === "PASS") score += 20;
    if (result.buttonTapAreaCheck === "PASS") score += 20;
    if (result.responsiveLayoutCheck === "PASS") score += 20;
    if (result.touchGestureCheck === "PASS") score += 20;
    if (result.mobileNavigationCheck === "PASS") score += 20;

    return score;

  };

  return (

    <div className="container">

      <div className="audit-box">

        <h1> Mobile-Friendliness Testing </h1>

        <p className="subtitle">
          Test how well your website performs on mobile devices
        </p>

        <div className="input-area">

          <input
            type="text"
            placeholder="Enter Website URL (example: https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button onClick={runAudit}>
            Run Audit
          </button>

        </div>

        {loading && <p className="loading">Running audit...</p>}

      </div>

      {result && (

        <div className="results">

          <h2>Audit Results</h2>

          <div className="result-row">
            <span>Font Size Check</span>
            <span className={result.fontSizeCheck === "PASS" ? "pass" : "fail"}>
              {result.fontSizeCheck}
            </span>
          </div>

          <div className="result-row">
            <span>Button Tap Area Check</span>
            <span className={result.buttonTapAreaCheck === "PASS" ? "pass" : "fail"}>
              {result.buttonTapAreaCheck}
            </span>
          </div>

          <div className="result-row">
            <span>Responsive Layout Analysis</span>
            <span className={result.responsiveLayoutCheck === "PASS" ? "pass" : "fail"}>
              {result.responsiveLayoutCheck}
            </span>
          </div>

          <div className="result-row">
            <span>Touch Gesture Usability</span>
            <span className={result.touchGestureCheck === "PASS" ? "pass" : "fail"}>
              {result.touchGestureCheck}
            </span>
          </div>

          <div className="result-row">
            <span>Mobile Navigation</span>
            <span className={result.mobileNavigationCheck === "PASS" ? "pass" : "fail"}>
              {result.mobileNavigationCheck}
            </span>
          </div>

          <div className="result-row">
            <span>Page Speed</span>
            <span>{result.pageSpeed} ms</span>
          </div>

          <div className="score-box">

            <h3>Mobile Friendliness Score</h3>

            <div className="score-circle">
              {calculateScore()}%
            </div>

          </div>

        </div>

      )}

    </div>

  );

}

export default MobileFriendly;