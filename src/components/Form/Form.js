import { Component } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import "./Form.css";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import RippleButton from "../RippleButton/RippleButton";

export default class Form extends Component {
  state = {
    personalInfo: {
      fname: "",
      fnameArr: [],
      lname: "",
      lnameArr: [],
      job: "",
      jonArr: [],
      phone: "",
      phoneArr: [],
      email: "",
      emailArr: [],
      state: "",
      stateArr: [],
      photo: "",
      photoArr: [],
      desc: "",
      descArr: [],
    },
    personalInfoArr: [],
  };

  // Make a copy so editing these properties later would not edit the original copy
  addField = () => {
    if (this.state.personalInfoArr.length === 1) return;
    const instanceArr = [
      ...this.state.personalInfoArr,
      this.state.personalInfo,
    ];
    this.setState({
      personalInfoArr: instanceArr,
    });
  };

  setFirstName = () => {
    const arrCopy = [...this.state.personalInfoArr];
    console.log(arrCopy[0]);
  };

  render() {
    return (
      <form
        className="form"
        action="get"
        method="get"
        acceptCharset="utf-8"
      >
        <PersonalInfo
          addField={() => this.addField()}
          setFirstName={() => this.setFirstName()}
          personalInfoArr={() => this.state.personalInfoArr}
        />
        <Experience />
        <Education />
        <Skill onClick={this.getSkillList}></Skill>
        <RippleButton content="Submit" />
      </form>
    );
  }
}
