import { Component } from "react";
import "./Cv-Application.css";

export default class CvApp extends Component {
  render() {
    return (
      <div className="cv">
        <div className="cv-header">
          <div className="title">
            <p className="name-title">{this.props.formArr[0][0].job}</p>
            <h1>
              {this.props.formArr[0][0].fname} {this.props.formArr[0][0].lname}
            </h1>
          </div>
        </div>
        <div className="cv-body">
          <div className="personal-details">
            <div className="photo">
              <img
                src={this.props.formArr[0][0].photo}
                alt="profile"
              />
            </div>
            <hr />
            <p>Personal Details</p>
            <hr />
            <div className="details">
              <h4>Adrress</h4>
              <p>{this.props.formArr[0][0].province}</p>
              <h4>Phone</h4>
              <p>{this.props.formArr[0][0].phone}</p>
              <h4>Email</h4>
              <p className="email-para">{this.props.formArr[0][0].email}</p>
            </div>
            <hr />
            <p>Skills</p>
            <hr />
            {this.props.formArr[3].map((skill) => {
              return (
                <div
                  key={skill.skillCategory}
                  className="skills"
                >
                  <h5>Category: {skill.skillCategory}</h5>
                  <ul>
                    {skill.skillListArr.map((list) => {
                      return <li key={list.uniqueID}>{list.skillName}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="other-fields">
            <hr />
            <p>Description</p>
            <hr />
            <div className="desc">
              <p>{this.props.formArr[0][0].desc}</p>
            </div>
            <hr />
            <p>Experience</p>
            <hr />
            {this.props.formArr[1].map((experience) => {
              return (
                <div
                  key={experience.position}
                  className="experience"
                >
                  <div className="experience-block">
                    <p>
                      {experience.from}
                      {" - "}
                      {experience.to}
                    </p>
                    <div>
                      <h4>{experience.position}</h4>
                      <p>
                        {experience.company}
                        {", "}
                        {experience.city}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <hr />
            <p>Education</p>
            <hr />
            {this.props.formArr[2].map((education) => {
              return (
                <div
                  key={education.university}
                  className="education"
                >
                  <div className="education-block">
                    <p>
                      {education.from} - {education.to}
                    </p>
                    <div>
                      <h4>
                        {education.university}, {education.city}
                      </h4>
                      <p>Degree: {education.degree}</p>
                      <p>Subject: {education.course}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
