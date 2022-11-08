import { Component } from "react";
import uniqid from "uniqid";

class SkillList extends Component {
  render() {
    return (
      <li className={`new ${this.props.klass}`}>
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
              onClick={() => {
                document
                  .querySelector(`.${this.props.klass}`)
                  .classList.add("remove");
                setTimeout(() => {
                  this.props.removeSkillList();
                  this.props.removeList();
                }, 250);
              }}
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
        <div className={`new ${this.props.klass}`}>
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
              onClick={() => {
                document
                  .querySelector(`.${this.props.klass}`)
                  .classList.add("remove");
                setTimeout(() => {
                  this.props.removeSkillField();
                  this.props.removeCategory();
                }, 290);
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <ul className={`new ${this.props.klass}`}>
            {this.state.skill.map((list, index) => (
              <SkillList
                key={this.state.skill[index][0]}
                index={index}
                klass={this.state.skill[index][0]}
                removeList={() => this.removeSkill(index)}
                removeSkillList={() => this.props.removeSkillList(index)}
              />
            ))}
          </ul>
          <button
            className={`add-list-btn ${this.props.klass}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.props.addSkillList();
              this.addSkill();
            }}
          >
            Add List
          </button>
        </div>
        <br /> <hr className={`new ${this.props.klass}`} />
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

  componentDidUpdate = () => console.log(this.props.skillArr);
  componentDidMount = () => console.log(this.props.skillArr);

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
            index={index}
            key={this.state.skillCategory[index][0]}
            klass={this.state.skillCategory[index][0]}
            removeCategory={() => this.removeSkillCategory()}
            addSkillList={() => this.props.addSkillList(index)}
            removeSkillField={() => this.props.removeSkillField(index)}
            removeSkillList={(indexList) =>
              this.props.removeSkillList(index, indexList)
            }
          />
        ))}
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            this.props.addSkillField();
            this.addSkillCategory();
          }}
        >
          {expandBtn()}
        </button>
      </fieldset>
    );
  }
}
