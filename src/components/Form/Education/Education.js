import { Component } from "react";

class EducationField extends Component {
  render() {
    return (
      <>
        <div className="input-wrapper">
          <div>
            <label htmlFor="university">University Name:</label>
            <input
              type="text"
              id="university"
              name="university"
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="city"
              id="city"
              name="city"
            />
          </div>
        </div>

        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="degree"
            id="degree"
            name="degree"
          />
        </div>

        <div className="input-wrapper">
          <div>
            <label htmlFor="from">From:</label>
            <input
              type="number"
              id="from"
              name="from"
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="number"
              id="to"
              name="to"
            />
          </div>
        </div>

        <div>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
          />
        </div>

        <div className="education-btn">
          <button
            type="button"
            className="add-education"
            onClick={() => this.props.addEducation()}
          >
            Add Field
          </button>
          <button
            type="button"
            className="remove-education"
            onClick={() => this.props.removeEducation()}
          >
            Remove Field
          </button>
        </div>
      </>
    );
  }
}

export default class Education extends Component {
  state = {
    education: [],
  };

  addEducation = () => {
    this.setState({
      education: [...this.state.education, []],
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
          <>
            <EducationField
              key={index+5}
              index={index}
              addEducation={() => this.addEducation()}
              removeEducation={() => this.removeEducation(index)}
            />
            <br key={index+1}/> <hr key={index+2}/>
          </>
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={this.addEducation}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
