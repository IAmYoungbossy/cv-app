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
          <div className="other-fields"></div>
          <div className="personal-details"></div>
        </div>
      </div>
    );
  }
}
