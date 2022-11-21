import { Component } from "react";

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
              placeholder="Front End Developer"
              onChange={(e) => this.props.setExperienceField(e, "position")}
              value={this.props.experienceArr.position}
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Google"
              onChange={(e) => this.props.setExperienceField(e, "company")}
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
            placeholder="Port Harcourt"
            onChange={(e) => this.props.setExperienceField(e, "city")}
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
              placeholder="2013"
              onChange={(e) => this.props.setExperienceField(e, "from")}
              value={this.props.experienceArr.from}
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="number"
              id="to"
              name="to"
              placeholder="2018"
              onChange={(e) => this.props.setExperienceField(e, "to")}
              value={this.props.experienceArr.to}
            />
          </div>
        </div>
        <div className={`education-btn new ${this.props.klass}`}>
          {this.props.experienceArrLength === this.props.index+1 && <button
            type="button"
            className="add-education"
            onClick={() => {
              this.props.addExperienceField();
            }}
          >
            Add Field
          </button>}
          <button
            type="button"
            className="remove-education"
            onClick={() => {
              document
                .querySelectorAll(`.${this.props.klass}`)
                .forEach((div) => div.classList.add("remove"));
              setTimeout(() => {
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
  render() {
    const expandBtn = () => {
      if (this.props.experienceArr.length === 0) return "Expand Field";
      return "Add Category";
    };
    const emptyArray = this.props.experienceArr.length === 0;
    return (
      <fieldset>
        <legend>EXPERIENCE</legend>
        {this.props.experienceArr.map((list, index) => (
          <ExperienceField
            key={this.props.experienceArr[index].uniqueID}
            index={index}
            klass={this.props.experienceArr[index].uniqueID}
            setExperienceField={(e, property) =>
              this.props.setExperienceField(e, index, property)
            }
            experienceArr={this.props.experienceArr[index]}
            experienceArrLength={this.props.experienceArr.length}
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
