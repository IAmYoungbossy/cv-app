import { Component } from "react";

class SkillList extends Component {
  render() {
    return (
      <li>
        <div className="skill-wrapper">
          <label htmlFor="skill">Skill</label>
          <div className="list-wrapper">
            <input
              type="text"
              id="skill"
              name="skill"
            />
            <button
              type="button"
              onClick={this.props.removeList}
            >
              X
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default class Skill extends Component {
  state = {
    skillList: [],
  };

  setSkillList = () => {
    this.setState({
      skillList: [...this.state.skillList, "List"],
    });
  };

  removeSkillList = (index) => {
    const skillListCopy = [...this.state.skillList];
    skillListCopy.splice(index, 1);
    this.setState({
      skillList: skillListCopy,
    });
  };

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
            {this.state.skillList.map((list, index) => (
              <SkillList
                key={index}
                index={index}
                removeList={() => this.removeSkillList()}
              />
            ))}
          </ul>
          <button
            className="add-list-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.setSkillList();
            }}
          >
            Add List
          </button>
        </div>
      </fieldset>
    );
  }
}
