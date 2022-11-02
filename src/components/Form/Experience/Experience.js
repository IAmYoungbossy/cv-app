import { Component } from "react";
import uniqid from "uniqid";

class ExperienceField extends Component {
  render() {
    return (
      <>
        <p>
          <span>{this.props.index + 1}</span>
        </p>
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
        <div className="education-btn">
          <button
            type="button"
            className="add-education"
            onClick={() => this.props.addExperience()}
          >
            Add Field
          </button>
          <button
            type="button"
            className="remove-education"
            onClick={() => this.props.removeExperience()}
          >
            Remove Field
          </button>
        </div>
        <br /> <hr />
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
            addExperience={() => this.addExperience()}
            removeExperience={() => this.removeExperience(index)}
          />
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={this.addExperience}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
