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
              name="name"
              id="first_name"
              onChange={(e) => this.props.setPersonalInfoField(e, "fname")}
              value={this.props.personalInfoArr().fname}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              name="name"
              type="text"
              id="last_name"
              onChange={(e) => this.props.setPersonalInfoField(e, "lname")}
              value={this.props.personalInfoArr().lname}
            />
          </div>
        </div>
        <div className="new  leave">
          <label htmlFor="job_title">Job Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            onChange={(e) => this.props.setPersonalInfoField(e, "job")}
            value={this.props.personalInfoArr().job}
          />
        </div>
        <div className="input-wrapper new  leave">
          <div>
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              onChange={(e) => this.props.setPersonalInfoField(e, "phone")}
              value={this.props.personalInfoArr().phone}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={(e) => this.props.setPersonalInfoField(e, "email")}
              value={this.props.personalInfoArr().email}
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
              onChange={(e) => this.props.setPersonalInfoField(e, "province")}
              value={this.props.personalInfoArr().province}
            />
          </div>
          <div>
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="file"
              name="photo"
              onChange={(e) => this.props.setPhotoOnChange(e)}
              accept="image/jpg, image/jpeg, image/png"
            />
          </div>
        </div>
        <div className="new  leave">
          <label htmlFor="desc">Description:</label>
          <textarea
            rows="4"
            id="desc"
            cols="50"
            name="desc"
            onChange={(e) => this.props.setPersonalInfoField(e, "desc")}
            value={this.props.personalInfoArr().desc}
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

  addPersonalInfo = () => this.setState({ personalInfo: true });
  removePersonalInfo = () => this.setState({ personalInfo: false });

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
            onClick={() => {
              this.addPersonalInfo();
              this.props.addPersonalInfoField();
            }}
          >
            {expandBtn()}
          </button>
        )}
        {expand && (
          <PersonalInfoField
            className="new"
            setPersonalInfoField={(e, property) =>
              this.props.setPersonalInfoField(e, property)
            }
            personalInfoArr={() => this.props.personalInfoArr()}
            removePersonalInfo={() => this.removePersonalInfo()}
            setPhotoOnChange={(e) => this.props.setPhotoOnChange(e)}
          />
        )}
      </fieldset>
    );
  }
}
