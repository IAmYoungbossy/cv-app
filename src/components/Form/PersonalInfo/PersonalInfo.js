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
              onChange={this.props.setFirstName}
              value={this.props.personalInfoArr().fname}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
              name="name"
              type="text"
              id="last_name"
              onChange={this.props.setLastName}
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
            onChange={this.props.setJob}
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
              onChange={this.props.setPhone}
              value={this.props.personalInfoArr().phone}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={this.props.setEmail}
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
              onChange={this.props.setProvince}
              value={this.props.personalInfoArr().province}
            />
          </div>
          <div>
            <label htmlFor="photo">Photo:</label>
            <input
              id="photo"
              type="file"
              name="photo"
              onChange={this.props.setPhoto}
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
            onChange={this.props.setDesc}
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
              this.props.addField();
            }}
          >
            {expandBtn()}
          </button>
        )}
        {expand && (
          <PersonalInfoField
            className="new"
            setJob={(e) => this.props.setJob(e)}
            setDesc={(e) => this.props.setDesc(e)}
            setPhone={(e) => this.props.setPhone(e)}
            setEmail={(e) => this.props.setEmail(e)}
            setPhoto={(e) => this.props.setPhoto(e)}
            setLastName={(e) => this.props.setLastName(e)}
            setProvince={(e) => this.props.setProvince(e)}
            addPersonalInfo={() => this.addPersonalInfo()}
            setFirstName={(e) => this.props.setFirstName(e)}
            personalInfoArr={() => this.props.personalInfoArr()}
            removePersonalInfo={() => this.removePersonalInfo()}
          />
        )}
      </fieldset>
    );
  }
}
