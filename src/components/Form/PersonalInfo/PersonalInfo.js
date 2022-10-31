import { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <fieldset>
        <legend>PERSONAL INFORMATION</legend>

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
      </fieldset>
    );
  }
}
