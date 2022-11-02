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
  render() {
    return (
      <>
        <div>
          <label htmlFor="skill_category">
            Category {this.props.index + 1}:
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
            {this.props.skillList.map((list, index) => (
              <SkillList
                key={this.props.key}
                index={index}
                removeList={() => this.props.removeList(index)}
              />
            ))}
          </ul>
          <button
            className="add-list-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.props.addSkillList();
            }}
          >
            Add List
          </button>
        </div>
      </>
    );
  }
}

export default class Skill extends Component {
  state = {
    skillCategory: [],
    id: uniqid,
  };

  addSkillList = (indexCat) => {
    const skillList = [...this.state.skillCategory];
    skillList[indexCat].push("List");
    this.setState({
      skillCategory: skillList,
    });
  };

  removeSkillList = (indexCat, indexLi) => {
    const skillList = [...this.state.skillCategory];
    skillList[indexCat].splice(indexLi, 1);
    this.setState({
      skillList: skillList,
    });
  };

  addSkillCategory = () => {
    this.setState({
      skillCategory: [...this.state.skillCategory, []],
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
        {this.state.skillCategory.map((list, index) => (
          <SkillCategory
            key={this.state.id()}
            index={index}
            addSkillList={() => this.addSkillList(index)}
            skillList={this.state.skillCategory[index]}
            removeCategory={() => this.removeSkillCategory()}
            removeList={(indexLi) => this.removeSkillList(index, indexLi)}
          />
        ))}
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
