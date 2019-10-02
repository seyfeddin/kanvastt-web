import React from "react";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <div
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

export default BlogPostPreview;
