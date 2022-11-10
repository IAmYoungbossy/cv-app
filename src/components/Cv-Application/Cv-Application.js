import { Component } from "react";
import "./Cv-Application.css";

export default class CvApp extends Component {
  componentDidUpdate = () => console.log(this.props.formArr)
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
            <hr />
            <p>Description</p>
            <hr />
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus urna neque viverra justo nec ultrices dui sapien.
                Aliquam eleifend mi in nulla. Facilisi cras fermentum odio eu
                feugiat pretium nibh ipsum.
              </p>
            </div>
            <hr />
            <p>Experience</p>
            <hr />
            <div className="experience">
              <div className="experience-block">
                <p>2013 - 2017</p>
                <div>
                  <h4>Full-Stack Web Developer</h4>
                  <p>Google, Port Harcourt</p>
                </div>
              </div>
            </div>
            <hr />
            <p>Education</p>
            <hr />
            <div className="education">
              <div className="education-block">
                <p>2013 - 2018</p>
                <div>
                  <h4>Rivers State University, Port Harcourt</h4>
                  <p>Degree: B.Tech</p>
                  <p>Subject: Agricultural And Environmental Engineering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="personal-details">
            <div className="photo"></div>
            <hr />
            <p>Personal Details</p>
            <hr />
            <div className="details">
              <h4>Adrress</h4>
              <p>
                #10 Noble Drive, Oro-Ekpo Street Off Elioparawa Road Ada George
                Port Harcourt.
              </p>
              <h4>Phone Number</h4>
              <p>07086286373</p>
              <h4>Email</h4>
              <p>letambarinua@gmail.com</p>
            </div>
            <hr />
            <p>Skills</p>
            <hr />
            <h5>Category: Web Dev</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <hr />
            <h5>Category: Soft Skill</h5>
            <ul>
              <li>Critical Thinking</li>
              <li>Team Work</li>
              <li>Honest</li>
              <li>Responsive</li>
            </ul>
            <div className="skills"></div>
          </div>
        </div>
      </div>
    );
  }
}
