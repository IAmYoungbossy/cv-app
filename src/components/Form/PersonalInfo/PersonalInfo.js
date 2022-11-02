import { Component } from "react";

class PersonalInfoField extends Component {
  render() {
    return (
      <>
        <div className="input-wrapper">
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="name"
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="job_title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
          />
        </div>

        <div className="input-wrapper">
          <div>
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div className="input-wrapper">
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="state"
              id="address"
              name="address"
            />
          </div>
          <div>
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/jpg, image/jpeg, image/png"
            />
          </div>
        </div>

        <div>
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            cols="50"
          ></textarea>
        </div>

        <div className="personal-btn">
          <button
            type="button"
            className="remove-education"
            onClick={() => this.props.removePersonalInfo()}
          >
            Collapse Field
          </button>
        </div>
      </>
    );
  }
}

export default class PersonalInfo extends Component {
  state = {
    personalInfo: [],
  };

  addPersonalInfo = () => {
    this.setState({
      personalInfo: [...this.state.personalInfo, []],
    });
  };

  removePersonalInfo = (index) => {
    const personalInfoCopy = [...this.state.personalInfo];
    personalInfoCopy.splice(index, 1);
    this.setState({
      personalInfo: personalInfoCopy,
    });
  };

  render() {
    const expandBtn = () => {
      if (this.state.personalInfo.length === 0) return "Expand Field";
      return "collapse Field";
    };
    const emptyArray = this.state.personalInfo.length === 0;
    return (
      <fieldset>
        <legend>PERSONAL INFORMATION</legend>
        {this.state.personalInfo.map((list, index) => (
          <>
            <PersonalInfoField
              key={index + 18}
              index={index}
              addPersonalInfo={() => this.addPersonalInfo()}
              removePersonalInfo={() => this.removePersonalInfo(index)}
            />
            <br key={index + 15} /> <hr key={index + 19} />
          </>
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={this.addPersonalInfo}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
