import { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <fieldset>
        <legend>EDUCATION</legend>

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
      </fieldset>
    );
  }
}