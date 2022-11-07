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

    education: {
      university: "",
      degree: "",
      course: "",
      from: "",
      city: "",
      to: "",
    },
    educationArr: [],
  };

  addToField = (array, object) => {
    const arrCopy = [...this.state[`${array}`], { ...this.state[`${object}`] }];
    this.setState({ [`${array}`]: arrCopy });
  };
  removeFromField = (index, array) => {
    const arrCopy = [...this.state[`${array}`]];
    arrCopy.splice(index, 1);
    this.setState({ [`${array}`]: arrCopy });
  };
  setField = (e, index, array, property) => {
    const arrCopy = [...this.state[`${array}`]];
    arrCopy[index][`${property}`] = e.target.value;
    this.setState({ [`${array}`]: arrCopy });
  };

  addPersonalInfoField = () => {
    if (this.state.personalInfoArr.length === 1) return;
    this.addToField("personalInfoArr", "personalInfo");
  };
  addExperienceField = () => this.addToField("experienceArr", "experience");
  addEducationField = () => this.addToField("educationArr", "education");
  removeEducationField = (index) => this.removeFromField(index, "educationArr");
  removeExperienceField = (index) =>
    this.removeFromField(index, "experienceArr");

  setPersonalInfoField = (e, index, property) =>
    this.setField(e, index, "personalInfoArr", property);
  setExperienceField = (e, index, property) =>
    this.setField(e, index, "experienceArr", property);
  setEducationField = (e, index, property) =>
    this.setField(e, index, "educationArr", property);

  setJob = (e) => this.setPersonalInfoField(e, 0, "job");
  setDesc = (e) => this.setPersonalInfoField(e, 0, "desc");
  setPhone = (e) => this.setPersonalInfoField(e, 0, "phone");
  setEmail = (e) => this.setPersonalInfoField(e, 0, "email");
  setPhoto = (e) => this.setPersonalInfoField(e, 0, "photo");
  setLastName = (e) => this.setPersonalInfoField(e, 0, "lname");
  setFirstName = (e) => this.setPersonalInfoField(e, 0, "fname");
  setProvince = (e) => this.setPersonalInfoField(e, 0, "province");

  setTo = (e, index) => this.setExperienceField(e, index, "to");
  setFrom = (e, index) => this.setExperienceField(e, index, "from");
  setCity = (e, index) => this.setExperienceField(e, index, "city");
  setCompany = (e, index) => this.setExperienceField(e, index, "company");
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
          addPersonalInfoField={() => this.addPersonalInfoField()}
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
          experienceArr={this.state.experienceArr}
          setTo={(e, index) => this.setTo(e, index)}
          setFrom={(e, index) => this.setFrom(e, index)}
          setCity={(e, index) => this.setCity(e, index)}
          setCompany={(e, index) => this.setCompany(e, index)}
          addExperienceField={() => this.addExperienceField()}
          setPosition={(e, index) => this.setPosition(e, index)}
          removeExperienceField={(index) => this.removeExperienceField(index)}
        />
        <Education />
        <Skill onClick={this.getSkillList}></Skill>
        <RippleButton content="Submit" />
      </form>
    );
  }
}
