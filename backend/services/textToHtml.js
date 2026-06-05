function textToHtml(text) {

  if (!text) {
    return "";
  }

  const lines =
    text
      .split("\n")
      .filter(
        line =>
          line.trim() !== ""
      );

  let html = "";

  let inUl = false;
  let inOl = false;

  for (const line of lines) {

    const trimmed =
      line.trim();

    if (
      trimmed.startsWith("# ")
    ) {

      html +=
        `<h1>${trimmed.substring(2)}</h1>\n`;

      continue;
    }

    if (
      trimmed.startsWith("## ")
    ) {

      html +=
        `<h2>${trimmed.substring(3)}</h2>\n`;

      continue;
    }

    if (
      trimmed.startsWith("- ")
    ) {

      if (!inUl) {

        html += "<ul>\n";
        inUl = true;
      }

      html +=
        `<li>${trimmed.substring(2)}</li>\n`;

      continue;
    }

    if (
      /^\d+\.\s/.test(
        trimmed
      )
    ) {

      if (!inOl) {

        html += "<ol>\n";
        inOl = true;
      }

      html +=
        `<li>${trimmed.replace(
          /^\d+\.\s/,
          ""
        )}</li>\n`;

      continue;
    }

    if (inUl) {

      html += "</ul>\n";
      inUl = false;
    }

    if (inOl) {

      html += "</ol>\n";
      inOl = false;
    }

    if (
      /^https?:\/\//.test(
        trimmed
      )
    ) {

      html +=
        `<a href="${trimmed}">${trimmed}</a>\n`;

      continue;
    }

    if (
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        trimmed
      )
    ) {

      html +=
        `<a href="mailto:${trimmed}">${trimmed}</a>\n`;

      continue;
    }

    html +=
      `<p>${trimmed}</p>\n`;
  }

  if (inUl) {
    html += "</ul>\n";
  }

  if (inOl) {
    html += "</ol>\n";
  }

  return html;
}

module.exports =
  textToHtml;