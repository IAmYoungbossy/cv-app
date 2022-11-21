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
              placeholder="Joe"
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
              placeholder="Biden"
              onChange={(e) => this.props.setPersonalInfoField(e, "lname")}
              value={this.props.personalInfoArr().lname}
            />
          </div>
        </div>
        <div className="new  leave">
          <label htmlFor="job_title">Title:</label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            placeholder="Mr./Mrs."
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
              placeholder="+2347074636475"
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
              placeholder="example@odinmail.com"
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
              placeholder="#2 Kings Str. Port Harcourt Nigeria"
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
            placeholder="Write what motivates you as an individual"
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
  componentDidMount = () => {
    if (this.props.personalInfoArr().length > 0) this.props.addPersonalInfo();
  };

  render() {
    const expandBtn = () => {
      if (!this.props.personalInfoState) return "Expand Field";
      return "collapse Field";
    };
    const collapse = this.props.personalInfoState === false;
    const expand = this.props.personalInfoState === true;
    return (
      <fieldset>
        <legend>PERSONAL INFO</legend>
        {collapse && (
          <button
            type="button"
            className="category-btn"
            onClick={() => {
              this.props.addPersonalInfo();
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
            personalInfoArr={() => this.props.personalInfoArr()[0]}
            removePersonalInfo={() => this.props.removePersonalInfo()}
            setPhotoOnChange={(e) => this.props.setPhotoOnChange(e)}
          />
        )}
      </fieldset>
    );
  }
}
