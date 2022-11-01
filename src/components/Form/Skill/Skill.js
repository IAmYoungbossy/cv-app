import { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <fieldset>
        <legend>SKILLS</legend>

        <div>
          <label htmlFor="skill_category">Category:</label>
          <input
            type="text"
            id="skill_category"
            name="skill_category"
          />
        </div>

        <div>
          <ul>
            <li>
              <div className="skill-wrapper">
                <label htmlFor="skill">Skill</label>
                <input
                  type="text"
                  id="skill"
                  name="skill"
                />
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
    );
  }
}
