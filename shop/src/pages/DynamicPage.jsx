// src/pages/DynamicPage.jsx
import React from "react";

const DynamicPage = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default DynamicPage;
