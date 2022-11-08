import { Component } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import FormTopButtons from "../FormTopButtons/FormTopButtons";
import Header from "../Header/Header";
import "./App.css";

export default class App extends Component {
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

    skill: {
      skillListArr: [],
      skillCategory: "",
    },
    skillName: "",
    skillArr: [],
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

  // Add Fields
  addSkillList = (index) => {
    const skillListCopy = [
      ...this.state.skillArr[index].skillListArr,
      this.state.skillName,
    ];
    const skillArrCopy = JSON.parse(JSON.stringify(this.state.skillArr));
    skillArrCopy[index].skillListArr = skillListCopy;
    this.setState({ skillArr: skillArrCopy });
  };
  addPersonalInfoField = () => {
    if (this.state.personalInfoArr.length === 1) return;
    this.addToField("personalInfoArr", "personalInfo");
  };
  addSkillField = () => this.addToField("skillArr", "skill");
  addExperienceField = () => this.addToField("experienceArr", "experience");
  addEducationField = () => this.addToField("educationArr", "education");

  // Remove Fields
  removeEducationField = (index) => this.removeFromField(index, "educationArr");
  removeSkillField = (index) => this.removeFromField(index, "skillArr");
  removeExperienceField = (index) =>
    this.removeFromField(index, "experienceArr");
  removeSkillList = (indexCat, IndexList) => {
    const skillArrCopy = JSON.parse(JSON.stringify(this.state.skillArr));
    skillArrCopy[indexCat].skillListArr.splice(IndexList, 1);
    this.setState({ skillArr: skillArrCopy });
  };

  // Set Fields
  setPersonalInfoField = (e, index, property) =>
    this.setField(e, index, "personalInfoArr", property);
  setExperienceField = (e, index, property) =>
    this.setField(e, index, "experienceArr", property);
  setEducationField = (e, index, property) =>
    this.setField(e, index, "educationArr", property);

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FormTopButtons />
          <Form
          setPersonalInfoField={(e, property) =>
            this.setPersonalInfoField(e, 0, property)
          }
          personalInfoArr={() => this.state.personalInfoArr[0]}
          addPersonalInfoField={() => this.addPersonalInfoField()}
          experienceArr={this.state.experienceArr}
          setExperienceField={(e, index, property) =>
            this.setExperienceField(e, index, property)
          }
          addExperienceField={() => this.addExperienceField()}
          removeExperienceField={(index) => this.removeExperienceField(index)}
          educationArr={this.state.educationArr}
          setEducationField={(e, index, property) =>
            this.setEducationField(e, index, property)
          }
          addEducationField={() => this.addEducationField()}
          removeEducationField={(index) => this.removeEducationField(index)}
          skillArr={this.state.skillArr}
          addSkillField={() => this.addSkillField()}
          addSkillList={(index) => this.addSkillList(index)}
          removeSkillField={(index) => this.removeSkillField(index)}
          removeSkillList={(indexCat, IndexList) =>
            this.removeSkillList(indexCat, IndexList)
          }
           />
        </main>
        <Footer />
      </div>
    );
  }
}
