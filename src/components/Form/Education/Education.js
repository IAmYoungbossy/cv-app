import { Component } from "react";
import uniqid from "uniqid";

class EducationField extends Component {
  render() {
    return (
      <>
        <p className={`new ${this.props.klass}`}>
          <span>{this.props.index + 1}</span>
        </p>
        <div className={`input-wrapper new ${this.props.klass}`}>
          <div>
            <label htmlFor="university">University Name:</label>
            <input
              type="text"
              id="university"
              name="university"
              onChange={this.props.setUniversity}
              value={this.props.educationArr.university}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="city"
              id="city"
              name="city"
              onChange={this.props.setCityEdu}
              value={this.props.educationArr.city}
            />
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="degree">Degree:</label>
          <input
            type="degree"
            id="degree"
            name="degree"
            onChange={this.props.setDegree}
            value={this.props.educationArr.degree}
          />
        </div>
        <div className={`input-wrapper new ${this.props.klass}`}>
          <div>
            <label htmlFor="from">From:</label>
            <input
              type="number"
              id="from"
              name="from"
              onChange={this.props.setFromEdu}
              value={this.props.educationArr.from}
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="number"
              id="to"
              name="to"
              onChange={this.props.setToEdu}
              value={this.props.educationArr.to}
            />
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            onChange={this.props.setCourse}
            value={this.props.educationArr.course}
          />
        </div>
        <div className={`education-btn new ${this.props.klass}`}>
          <button
            type="button"
            className="add-education"
            onClick={() => {
              this.props.addEducationField();
              this.props.addEducation();
            }}
          >
            Add Field
          </button>
          <button
            type="button"
            className="remove-education"
            onClick={() => {
              document
                .querySelectorAll(`.${this.props.klass}`)
                .forEach((div) => div.classList.add("remove"));
              setTimeout(() => {
                this.props.removeEducationField();
                this.props.removeEducation();
              }, 300);
            }}
          >
            Remove Field
          </button>
        </div>
        <br /> <hr className="new" />
      </>
    );
  }
}

export default class Education extends Component {
  state = {
    education: [],
    id: uniqid,
  };

  addEducation = () => {
    this.setState({
      education: [...this.state.education, [this.state.id()]],
    });
  };

  removeEducation = (index) => {
    const educationCopy = [...this.state.education];
    educationCopy.splice(index, 1);
    this.setState({
      education: educationCopy,
    });
  };

  render() {
    const expandBtn = () => {
      if (this.state.education.length === 0) return "Expand Field";
      return "Add Category";
    };
    const emptyArray = this.state.education.length === 0;
    return (
      <fieldset>
        <legend>EDUCATION</legend>
        {this.state.education.map((list, index) => (
          <EducationField
            key={this.state.education[index][0]}
            index={index}
            klass={this.state.education[index][0]}
            addEducation={() => this.addEducation()}
            removeEducation={() => this.removeEducation(index)}
            educationArr={this.props.educationArr[index]}
            setToEdu={(e) => this.props.setToEdu(e, index)}
            setDegree={(e) => this.props.setDegree(e, index)}
            setCourse={(e) => this.props.setCourse(e, index)}
            addEducationField={() => this.props.addEducationField()}
            setCityEdu={(e) => this.props.setCityEdu(e, index)}
            setFromEdu={(e) => this.props.setFromEdu(e, index)}
            setUniversity={(e) => this.props.setUniversity(e, index)}
            removeEducationField={() => this.props.removeEducationField(index)}
          />
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={() => {
              this.props.addEducationField();
              this.addEducation();
            }}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
