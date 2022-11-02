import { Component } from "react";

class PersonalInfoField extends Component {
  render() {
    return (
      <>
        <div className="input-wrapper new leave">
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
        <div className="new  leave">
          <label htmlFor="job_title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
          />
        </div>
        <div className="input-wrapper new  leave">
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
        <div className="input-wrapper new  leave">
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
        <div className="new  leave">
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="personal-btn new  leave">
          <button
            type="button"
            className="remove-education"
            onClick={() => {
              document
                .querySelectorAll(".leave")
                .forEach((div) => div.classList.add("remove"));
              setTimeout(() => this.props.removePersonalInfo(), 300);
            }}
          >
            Collapse Field
          </button>
        </div>
        <br /> <hr className="new leave" />
      </>
    );
  }
}

export default class PersonalInfo extends Component {
  state = {
    personalInfo: false,
  };

  addPersonalInfo = () => {
    this.setState({
      personalInfo: true,
    });
  };

  removePersonalInfo = () => {
    this.setState({
      personalInfo: false,
    });
  };

  render() {
    const expandBtn = () => {
      if (!this.state.personalInfo) return "Expand Field";
      return "collapse Field";
    };
    const collapse = this.state.personalInfo === false;
    const expand = this.state.personalInfo === true;
    return (
      <fieldset>
        <legend>PERSONAL INFO</legend>
        {collapse && (
          <button
            type="button"
            className="category-btn"
            onClick={this.addPersonalInfo}
          >
            {expandBtn()}
          </button>
        )}
        {expand && (
          <PersonalInfoField
            className="new"
            addPersonalInfo={() => this.addPersonalInfo()}
            removePersonalInfo={() => this.removePersonalInfo()}
          />
        )}
      </fieldset>
    );
  }
}
