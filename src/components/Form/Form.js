import { Component } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import "./Form.css";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skill from "./Skill/Skill";
import RippleButton from "../RippleButton/RippleButton";

export default class Form extends Component {
  render() {
    return (
      <form
        className="form"
        action="get"
        method="get"
        acceptCharset="utf-8"
      >
        <PersonalInfo
          setPersonalInfoField={(e, property) =>
            this.props.setPersonalInfoField(e, property)
          }
          personalInfoArr={() => this.props.personalInfoArr()}
          addPersonalInfoField={() => this.props.addPersonalInfoField()}
        />
        <Experience
          experienceArr={this.props.experienceArr}
          setExperienceField={(e, index, property) =>
            this.props.setExperienceField(e, index, property)
          }
          addExperienceField={() => this.props.addExperienceField()}
          removeExperienceField={(index) =>
            this.props.stateremoveExperienceField(index)
          }
        />
        <Education
          educationArr={this.props.educationArr}
          setEducationField={(e, index, property) =>
            this.props.setEducationField(e, index, property)
          }
          addEducationField={() => this.props.addEducationField()}
          removeEducationField={(index) =>
            this.props.removeEducationField(index)
          }
        />
        <Skill
          skillArr={this.props.skillArr}
          addSkillField={() => this.props.addSkillField()}
          addSkillList={(index) => this.props.addSkillList(index)}
          removeSkillField={(index) => this.props.removeSkillField(index)}
          removeSkillList={(indexCat, IndexList) =>
            this.props.removeSkillList(indexCat, IndexList)
          }
        />
        <RippleButton content="Submit" />
      </form>
    );
  }
}
