import React from "react";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div>
    <div>{widgetFor("body")}</div>
    <div>{entry.getIn(["data", "description"])}</div>
    <div>{entry.getIn(["data", "tags"])}</div>
    <div>{entry.getIn(["data", "title"])}</div>
  </div>
);

export default BlogPostPreview;
