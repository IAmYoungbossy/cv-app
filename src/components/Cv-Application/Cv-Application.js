import { Component } from "react";
import "./Cv-Application.css";

export default class CvApp extends Component {
  render() {
    return (
      <div className="cv">
        <div className="cv-header">
          <div className="title">
            <p className="name-title">Mr.</p>
            <h1>Letam Bossman Barinua</h1>
          </div>
        </div>
        <div className="cv-body">
          <div className="other-fields">
            <p>Description</p>
            <hr />
            <div className="desc"></div>
            <p>Experience</p>
            <hr />
            <div className="experience"></div>
            <p>Education</p>
            <hr />
            <div className="education"></div>
          </div>
          <div className="personal-details"></div>
        </div>
      </div>
    );
  }
}
