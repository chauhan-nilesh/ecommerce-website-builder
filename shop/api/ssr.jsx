import React from "react";
import ReactDOMServer from "react-dom/server";
import DynamicPage from "../src/pages/DynamicPage";

export default async function handler(req, res) {
  const { id } = req.query;

  // Simulated data fetching for SEO content (replace with real APIs if needed)
  const data = {
    title: `Dynamic Page ${id}`,
    description: `Learn all about Dynamic Page ${id}!`,
    content: `Content for page ${id}, tailored just for you.`,
  };

  // Generate server-rendered React HTML
  const reactHtml = ReactDOMServer.renderToString(
    React.createElement(DynamicPage, { data })
  );

  // Construct the complete HTML with dynamic meta tags
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
      <meta name="description" content="${data.description}">
      <meta name="robots" content="index, follow">
    </head>
    <body>
      <div id="root">${reactHtml}</div>
      <!-- Client-side React still loads -->
      <script src="/main.js"></script>
    </body>
    </html>
  `;

  // Serve the generated HTML
  res.setHeader("Content-Type", "text/html");
  res.send(html);
}
