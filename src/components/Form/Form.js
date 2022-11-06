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

    experience: {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
    experienceArr: [],
  };

  // Make a copy so editing these properties later would not edit the original copy
  addField = () => {
    if (this.state.personalInfoArr.length === 1) return;
    const arrCopy = [...this.state.personalInfoArr, this.state.personalInfo];
    this.setState({ personalInfoArr: arrCopy });
    console.log(this.state.personalInfo);
  };

  addExperienceField = () => {
    const arrCopy = [...this.state.experienceArr, this.state.experience];
    this.setState({ experienceArr: arrCopy });
    console.log(this.state.experienceArr);
  };
  removeExperienceField = (index) => {
    const arrCopy = [...this.state.experienceArr];
    arrCopy.splice(index, 1);
    this.setState({ experience: arrCopy });
  };

  setInputField = (e, property) => {
    const arrCopy = [...this.state.personalInfoArr];
    arrCopy[0][`${property}`] = e.target.value;
    this.setState({ personalInfoArr: arrCopy });
    console.log(arrCopy[0]);
  };
  setExperienceField = (e, index, property) => {
    const arrCopy = [...this.state.experienceArr];
    arrCopy[index][`${property}`] = e.target.value;
    this.setState({ experienceArr: arrCopy });
    console.log(arrCopy);
  };

  setJob = (e) => this.setInputField(e, "job");
  setDesc = (e) => this.setInputField(e, "desc");
  setPhone = (e) => this.setInputField(e, "phone");
  setEmail = (e) => this.setInputField(e, "email");
  setPhoto = (e) => this.setInputField(e, "photo");
  setLastName = (e) => this.setInputField(e, "lname");
  setFirstName = (e) => this.setInputField(e, "fname");
  setProvince = (e) => this.setInputField(e, "province");

  setPosition = (e, index) => this.setExperienceField(e, index, "position");

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
          personalInfoArr={() => this.state.personalInfoArr[0]}
        />
        <Experience
          setPosition={(e, index) => this.setPosition(e, index)}
          addExperienceField={() => this.addExperienceField()}
          removeExperienceField={(index) => this.removeExperienceField(index)}
        />
        <Education />
        <Skill onClick={this.getSkillList}></Skill>
        <RippleButton content="Submit" />
      </form>
    );
  }
}
