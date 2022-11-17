import React, { Component } from "react";
import CvApp from "../Cv-Application/Cv-Application";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import FormTopButtons from "../FormTopButtons/FormTopButtons";
import Header from "../Header/Header";
import uniqid from "uniqid";
import "./App.css";
import { previewCV } from "../Form/previewCv";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      uniqueID: uniqid,
    },
    personalInfoArr: [],
    experience: {
      uniqueID: uniqid,
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
    experienceArr: [],
    education: {
      uniqueID: uniqid,
      university: "",
      degree: "",
      course: "",
      from: "",
      city: "",
      to: "",
    },
    educationArr: [],
    skill: {
      uniqueID: uniqid,
      skillListArr: [],
      skillCategory: "",
    },
    skillData: {
      uniqueID: uniqid,
      skillName: "",
    },
    skillArr: [],
    formArr: [],
    errorMsg: false,
    cvCondition: false,
  };

  changeCondition = () => {
    let boolean;
    if (this.state.cvCondition) boolean = false;
    else boolean = true;
    this.setState({ cvCondition: boolean });
  };

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

  previewCv = () => this.setState({ formArr: previewCV });
  autoFill = () => {
    this.setState({
      personalInfoArr: previewCV[0],
      experienceArr: previewCV[1],
      educationArr: previewCV[2],
      skillArr: previewCV[3],
    });
  };

  reset = () => {
    this.setState({
      personalInfoArr: [],
      experienceArr: [],
      educationArr: [],
      skillArr: [],
    });
  };

  checkPersonalInfo = () => {
    this.setState({ errorMsg: true });
  };

  // Reusable methods
  addToField = (array, object) => {
    const arrCopy = [...this.state[`${array}`], { ...this.state[`${object}`] }];
    arrCopy[arrCopy.length - 1].uniqueID =
      arrCopy[arrCopy.length - 1].uniqueID();
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
      { ...this.state.skillData },
    ];
    const skillArrCopy = JSON.parse(JSON.stringify(this.state.skillArr));
    skillArrCopy[index].skillListArr = skillListCopy;
    const list = skillArrCopy[index].skillListArr;
    list[list.length - 1].uniqueID = list[list.length - 1].uniqueID();
    this.setState({ skillArr: skillArrCopy });
  };
  addPersonalInfoField = () => {
    this.setState({ errorMsg: false });
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
    const arrCopy = JSON.parse(JSON.stringify(this.state.skillArr));
    arrCopy[indexCat].skillListArr[indexList].skillName = e.target.value;
    this.setState({ skillArr: arrCopy });
  };
  setSkillCategory = (e, index) => {
    const arrCopy = JSON.parse(JSON.stringify(this.state.skillArr));
    arrCopy[index].skillCategory = e.target.value;
    this.setState({ skillArr: arrCopy });
  };

  printCV = () => {
    const cvPage = document.querySelector(".cv");
    cvPage.classList.add("cv2");
    setTimeout(() => cvPage.classList.remove("cv2"), 0);
    html2canvas(cvPage).then((canvas) => {
      const imgURL = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgURL, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FormTopButtons
            cvCondition={this.state.cvCondition}
            changeCondition={() => this.changeCondition()}
            preview={() => this.previewCv()}
            autoFill={() => this.autoFill()}
            reset={() => this.reset()}
            printCV={() => this.printCV()}
          />
          {this.state.cvCondition === false && (
            <Form
              setPersonalInfoField={(e, property) =>
                this.setPersonalInfoField(e, 0, property)
              }
              personalInfoArr={() => this.state.personalInfoArr}
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
              errorMsg={this.state.errorMsg}
              checkPersonalInfo={() => this.checkPersonalInfo()}
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
