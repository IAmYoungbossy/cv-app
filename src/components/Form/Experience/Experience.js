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
              value={this.props.experienceArr.position}
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={this.props.setCompany}
              value={this.props.experienceArr.company}
            />
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="city">City:</label>
          <input
            type="city"
            id="city"
            name="city"
            onChange={this.props.setCity}
            value={this.props.experienceArr.city}
          />
        </div>
        <div className={`input-wrapper new ${this.props.klass}`}>
          <div>
            <label htmlFor="from">From:</label>
            <input
              type="number"
              id="from"
              name="from"
              onChange={this.props.setFrom}
              value={this.props.experienceArr.from}
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="number"
              id="to"
              name="to"
              onChange={this.props.setTo}
              value={this.props.experienceArr.to}
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

  componentDidUpdate = () => console.log(this.props.experienceArr)
  componentDidMount = () => console.log(this.props.experienceArr)

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
            setTo={(e) => this.props.setTo(e, index)}
            setFrom={(e) => this.props.setFrom(e, index)}
            setCity={(e) => this.props.setCity(e, index)}
            experienceArr={this.props.experienceArr[index]}
            setCompany={(e) => this.props.setCompany(e, index)}
            removeExperience={() => this.removeExperience(index)}
            setPosition={(e) => this.props.setPosition(e, index)}
            addExperienceField={() => this.props.addExperienceField()}
            removeExperienceField={() =>
              this.props.removeExperienceField(index)
            }
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
