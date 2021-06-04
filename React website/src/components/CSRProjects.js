import React, { Component } from "react";
import "./CSRProjects.css"
import ProjectSlider from "./ProjectSlider.js"

class CSRProjects extends Component {
  render() {
    return (
      <div className="blog_list_page">
        <p className="blog_list_header">CSR Projects</p>
        <ProjectSlider />
      </div>
    );
  }
}

export default CSRProjects;
