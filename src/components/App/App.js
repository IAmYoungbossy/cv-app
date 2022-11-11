import { Component } from "react";
import CvApp from "../Cv-Application/Cv-Application";
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

    formArr: [],

    cvCondition: false,
  };

  changeCondition = () => this.setState({ cvCondition: true });

  // Form action
  formAction = () => {
    const arrCopy = [
      [...this.state.personalInfoArr],
      [...this.state.experienceArr],
      [...this.state.educationArr],
      [...this.state.skillArr],
    ];
    this.setState({ formArr: arrCopy });
  };

  // Reusable methods
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
  setPhotoOnChange = (e) => {
    const photoURL = URL.createObjectURL(e.target.files[0]);
    const newArr = [...this.state.personalInfoArr];
    newArr[0].photo = photoURL;
    this.setState({ personalInfoArr: newArr });
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
  setSkillList = (e, indexCat, indexList) => {
    const arrCopy = [...this.state.skillArr];
    arrCopy[indexCat].skillListArr.splice(indexList, 1, e.target.value);
    this.setState({ skillArr: arrCopy });
  };
  setSkillCategory = (e, index) => {
    const arrCopy = [...this.state.skillArr];
    arrCopy[index].skillCategory = e.target.value;
    this.setState({ skillArr: arrCopy });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FormTopButtons />
          {this.state.cvCondition === false && (
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
              removeExperienceField={(index) =>
                this.removeExperienceField(index)
              }
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
              formArr={this.state.formArr}
              formAction={() => this.formAction()}
              setSkillList={(e, indexCat, indexList) =>
                this.setSkillList(e, indexCat, indexList)
              }
              setSkillCategory={(e, index) => this.setSkillCategory(e, index)}
              changeCondition={() => this.changeCondition()}
              setPhotoOnChange={(e) => this.setPhotoOnChange(e)}
            />
          )}
          {this.state.cvCondition === true && (
            <CvApp formArr={this.state.formArr} />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
