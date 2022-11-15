import { Component } from "react";

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
              onChange={(e) => this.props.setSkillList(e)}
              value={this.props.list}
            />
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector(`.${this.props.klass}`)
                  .classList.add("remove");
                setTimeout(() => {
                  this.props.removeSkillList();
                  // this.props.removeList();
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
              onChange={(e) => this.props.setSkillCategory(e)}
              value={this.props.categoryName}
            />
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector(`.${this.props.klass}`)
                  .classList.add("remove");
                setTimeout(() => {
                  this.props.removeSkillField();
                }, 290);
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <ul className={`new ${this.props.klass}`}>
            {this.props.skillListArr[this.props.index].skillListArr.map(
              (list, index) => (
                <SkillList
                  key={list.uniqueID}
                  index={index}
                  klass={list.uniqueID}
                  list={list.skillName}
                  removeSkillList={() => this.props.removeSkillList(index)}
                  setSkillList={(e) => this.props.setSkillList(e, index)}
                />
              )
            )}
          </ul>
          <button
            className={`add-list-btn ${this.props.klass}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              this.props.addSkillList();
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
  render() {
    const expandBtn = () => {
      if (this.props.skillArr.length === 0) return "Expand Field";
      return "Add Category";
    };
    return (
      <fieldset>
        <legend>SKILLS</legend>
        {this.props.skillArr.map((list, index) => (
          <SkillCategory
            index={index}
            categoryName={list.skillCategory}
            key={this.props.skillArr[index].uniqueID}
            klass={this.props.skillArr[index].uniqueID}
            addSkillList={() => this.props.addSkillList(index)}
            removeSkillField={() => this.props.removeSkillField(index)}
            removeSkillList={(indexList) =>
              this.props.removeSkillList(index, indexList)
            }
            setSkillList={(e, indexList) =>
              this.props.setSkillList(e, index, indexList)
            }
            setSkillCategory={(e) => this.props.setSkillCategory(e, index)}
            skillListArr={this.props.skillArr}
          />
        ))}
        <button
          type="button"
          className="category-btn"
          onClick={() => {
            this.props.addSkillField();
          }}
        >
          {expandBtn()}
        </button>
      </fieldset>
    );
  }
}
