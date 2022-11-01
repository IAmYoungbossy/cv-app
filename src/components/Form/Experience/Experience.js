import { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <fieldset>
        <legend>EXPERIENCE</legend>

        <div className="input-wrapper">
          <div>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="city"
            id="city"
            name="city"
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
      </fieldset>
    );
  }
}
