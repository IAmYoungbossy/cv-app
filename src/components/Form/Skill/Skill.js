import { Component } from "react";
import uniqid from "uniqid";

class SkillList extends Component {
  render() {
    return (
      <li>
        <div className="skill-wrapper">
          <label htmlFor="skill">Skill {this.props.index + 1}:</label>
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

class SkillCategory extends Component {
  state = {
    skill: [],
    id: uniqid,
  };

  addSkill = () => {
    this.setState({
      skill: [...this.state.skill, [this.state.id()]],
    });
  };

  removeSkill = (index) => {
    const skillCopy = [...this.state.skill];
    skillCopy.splice(index, 1);
    this.setState({
      skill: skillCopy,
    });
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="skill_category">
            <p className="category">
              <span>Category: {this.props.index + 1}</span>
            </p>
          </label>
          <div className="category_wrapper">
            <input
              type="text"
              id="skill_category"
              name="skill_category"
            />
            <button
              type="button"
              onClick={this.props.removeCategory}
            >
              Remove
            </button>
          </div>
        </div>
        <div>
          <ul>
            {this.state.skill.map((list, index) => (
              <SkillList
                key={this.state.skill[index][0]}
                index={index}
                removeList={() => this.removeSkill(index)}
              />
            ))}
          </ul>
          <button
            className="add-list-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.addSkill();
            }}
          >
            Add List
          </button>
        </div>
        <br /> <hr />
      </>
    );
  }
}

export default class Skill extends Component {
  state = {
    skillCategory: [],
    id: uniqid,
  };

  addSkillCategory = () => {
    this.setState({
      skillCategory: [...this.state.skillCategory, [this.state.id()]],
    });
  };

  removeSkillCategory = (index) => {
    const skillCategoryCopy = [...this.state.skillCategory];
    skillCategoryCopy.splice(index, 1);
    this.setState({
      skillCategory: skillCategoryCopy,
    });
  };

  render() {
    const expandBtn = () => {
      if (this.state.skillCategory.length === 0) return "Expand Field";
      return "Add Category";
    };
    return (
      <fieldset>
        <legend>SKILLS</legend>
        {this.state.skillCategory.map((list, index) => {
          return (
            <SkillCategory
              index={index}
              key={this.state.skillCategory[index][0]}
              removeCategory={() => this.removeSkillCategory()}
            />
          );
        })}
        <button
          type="button"
          className="category-btn"
          onClick={this.addSkillCategory}
        >
          {expandBtn()}
        </button>
      </fieldset>
    );
  }
}
