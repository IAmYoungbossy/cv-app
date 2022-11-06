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
      job: "",
      desc: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      photo: "",
      province: "",
    },
    personalInfoArr: [],
  };

  // Make a copy so editing these properties later would not edit the original copy
  addField = () => {
    if (this.state.personalInfoArr.length === 1) return;
    const arrCopy = [...this.state.personalInfoArr, this.state.personalInfo];
    this.setState({ personalInfoArr: arrCopy });
  };

  setInputField = (e, fname) => {
    const arrCopy = [...this.state.personalInfoArr];
    arrCopy[0][`${fname}`] = e.target.value;
    this.setState({ personalInfoArr: arrCopy });
    console.log(arrCopy[0]);
  };

  setJob = (e) => this.setInputField(e, "job");
  setDesc = (e) => this.setInputField(e, "desc");
  setPhone = (e) => this.setInputField(e, "phone");
  setEmail = (e) => this.setInputField(e, "email");
  setPhoto = (e) => this.setInputField(e, "photo");
  setLastName = (e) => this.setInputField(e, "lname");
  setFirstName = (e) => this.setInputField(e, "fname");
  setProvince = (e) => this.setInputField(e, "province");

  render() {
    return (
      <form
        className="form"
        action="get"
        method="get"
        acceptCharset="utf-8"
      >
        <PersonalInfo
          setJob={(e) => this.setJob(e)}
          addField={() => this.addField()}
          setDesc={(e) => this.setDesc(e)}
          setPhone={(e) => this.setPhone(e)}
          setEmail={(e) => this.setEmail(e)}
          setPhoto={(e) => this.setPhoto(e)}
          setLastName={(e) => this.setLastName(e)}
          setProvince={(e) => this.setProvince(e)}
          setFirstName={(e) => this.setFirstName(e)}
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
