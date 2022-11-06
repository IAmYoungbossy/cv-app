import { Component } from "react";
import uniqid from "uniqid";

class ExperienceField extends Component {
  render() {
    return (
      <>
        <p className={`new ${this.props.klass}`}>
          <span>{this.props.index + 1}</span>
        </p>
        <div className={`input-wrapper new ${this.props.klass}`}>
          <div>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              onChange={this.props.setPosition}
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
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="city">City:</label>
          <input
            type="city"
            id="city"
            name="city"
          />
        </div>
        <div className={`input-wrapper new ${this.props.klass}`}>
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
        <div className={`education-btn new ${this.props.klass}`}>
          <button
            type="button"
            className="add-education"
            onClick={() => {
              this.props.addExperience();
              this.props.addExperienceField();
            }}
          >
            Add Field
          </button>
          <button
            type="button"
            className="remove-education"
            onClick={() => {
              document
                .querySelectorAll(`.${this.props.klass}`)
                .forEach((div) => div.classList.add("remove"));
              setTimeout(() => {
                this.props.removeExperience();
                this.props.removeExperienceField();
              }, 300);
            }}
          >
            Remove Field
          </button>
        </div>
        <br /> <hr className="new" />
      </>
    );
  }
}

export default class Experience extends Component {
  state = {
    experience: [],
    id: uniqid,
  };

  addExperience = () => {
    this.setState({
      experience: [...this.state.experience, [this.state.id()]],
    });
  };

  removeExperience = (index) => {
    const experienceCopy = [...this.state.experience];
    experienceCopy.splice(index, 1);
    this.setState({
      experience: experienceCopy,
    });
  };

  render() {
    const expandBtn = () => {
      if (this.state.experience.length === 0) return "Expand Field";
      return "Add Category";
    };
    const emptyArray = this.state.experience.length === 0;
    return (
      <fieldset>
        <legend>EXPERIENCE</legend>
        {this.state.experience.map((list, index) => (
          <ExperienceField
            key={this.state.experience[index][0]}
            index={index}
            klass={this.state.experience[index][0]}
            addExperience={() => this.addExperience()}
            removeExperience={() => this.removeExperience(index)}
            setPosition={(e) => this.props.setPosition(e, index)}
            removeExperienceField={() =>
              this.props.removeExperienceField(index)
            }
            addExperienceField={() => this.props.addExperienceField()}
          />
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={() => {
              this.addExperience();
              this.props.addExperienceField();
            }}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
