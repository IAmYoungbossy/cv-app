import { Component } from "react";

class EducationField extends Component {
  render() {
    return (
      <>
        <p className={`new ${this.props.klass}`}>
          <span>{this.props.index + 1}</span>
        </p>
        <div className={`input-wrapper new ${this.props.klass}`}>
          <div>
            <label htmlFor="university">University Name:</label>
            <input
              type="text"
              id="university"
              name="university"
              placeholder="Rivers State University"
              onChange={(e) => this.props.setEducationField(e, "university")}
              value={this.props.educationArr.university}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="city"
              id="city"
              name="city"
              placeholder="Port Harcourt"
              onChange={(e) => this.props.setEducationField(e, "city")}
              value={this.props.educationArr.city}
            />
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="degree">Degree:</label>
          <input
            type="degree"
            id="degree"
            name="degree"
            placeholder="B.Tech"
            onChange={(e) => this.props.setEducationField(e, "degree")}
            value={this.props.educationArr.degree}
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
              onChange={(e) => this.props.setEducationField(e, "from")}
              value={this.props.educationArr.from}
            />
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <input
              type="number"
              id="to"
              name="to"
              placeholder="2018"
              onChange={(e) => this.props.setEducationField(e, "to")}
              value={this.props.educationArr.to}
            />
          </div>
        </div>
        <div className={`new ${this.props.klass}`}>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Agricultural And Environmental Engineering"
            onChange={(e) => this.props.setEducationField(e, "course")}
            value={this.props.educationArr.course}
          />
        </div>
        <div className={`education-btn new ${this.props.klass}`}>
          {this.props.educationArrLength === this.props.index+1 && <button
            type="button"
            className="add-education"
            onClick={() => {
              this.props.addEducationField();
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
                this.props.removeEducationField();
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

export default class Education extends Component {
  render() {
    const expandBtn = () => {
      if (this.props.educationArr.length === 0) return "Expand Field";
      return "Add Category";
    };
    const emptyArray = this.props.educationArr.length === 0;
    return (
      <fieldset>
        <legend>EDUCATION</legend>
        {this.props.educationArr.map((list, index) => (
          <EducationField
            key={this.props.educationArr[index].uniqueID}
            index={index}
            klass={this.props.educationArr[index].uniqueID}
            educationArr={this.props.educationArr[index]}
            educationArrLength={this.props.educationArr.length}
            setEducationField={(e, property) =>
              this.props.setEducationField(e, index, property)
            }
            addEducationField={() => this.props.addEducationField()}
            removeEducationField={() => this.props.removeEducationField(index)}
          />
        ))}
        {emptyArray && (
          <button
            type="button"
            className="category-btn"
            onClick={() => {
              this.props.addEducationField();
            }}
          >
            {expandBtn()}
          </button>
        )}
      </fieldset>
    );
  }
}
