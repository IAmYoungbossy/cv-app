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
        onSubmit={this.props.formAction}
      >
        <PersonalInfo
          setPersonalInfoField={(e, property) =>
            this.props.setPersonalInfoField(e, property)
          }
          personalInfoArr={() => this.props.personalInfoArr()}
          addPersonalInfoField={() => this.props.addPersonalInfoField()}
          setPhotoOnChange={(e) => this.props.setPhotoOnChange(e)}
          personalInfoState={this.props.personalInfoState}
          removePersonalInfo={() => this.props.removePersonalInfo()}
          addPersonalInfo={() => this.props.addPersonalInfo()}
        />
        <Experience
          experienceArr={this.props.experienceArr}
          setExperienceField={(e, index, property) =>
            this.props.setExperienceField(e, index, property)
          }
          addExperienceField={() => this.props.addExperienceField()}
          removeExperienceField={(index) =>
            this.props.removeExperienceField(index)
          }
          formArr={this.props.formArr}
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
          setSkillList={(e, indexCat, indexList) =>
            this.props.setSkillList(e, indexCat, indexList)
          }
          setSkillCategory={(e, index) => this.props.setSkillCategory(e, index)}
        />
        {this.props.errorMsg && (
          <p>Expand "Personal Info" field to Print View</p>
        )}
        <RippleButton
          content="Print View"
          personalInfoArr={() => this.props.personalInfoArr()}
          formAction={() => this.props.formAction()}
          changeCondition={() => this.props.changeCondition()}
          checkPersonalInfo={() => this.props.checkPersonalInfo()}
        />
      </form>
    );
  }
}
