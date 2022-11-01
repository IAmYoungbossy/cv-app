import { Component } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import "./Form.css";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skill from "./Skill/Skill";

export default class Form extends Component {
  render() {
    return (
      <form
        action="get"
        method="get"
        acceptCharset="utf-8"
      >
        <PersonalInfo />
        <Experience />
        <Education />
        <Skill onClick={this.getSkillList} >
        </Skill>
      </form>
    );
  }
}
