import { Component } from "react";
import RippleButton from "../RippleButton/RippleButton";
import "./FormTopButtons.css";

export default class FormTopButtons extends Component {
  alternateBtnFunction = (oldValue, newValue) => {
    if (this.props.cvCondition) return newValue;
    return oldValue;
  };
  render() {
    return (
      <div className="form-top-btn">
        <RippleButton
          content={this.alternateBtnFunction("Preview CV", "Edit")}
          changeCondition={() => this.props.changeCondition()}
          cvCondition={this.props.cvCondition}
        />
        <RippleButton
          content={this.alternateBtnFunction("Auto Fill", "Download")}
        />
        <RippleButton
          content={this.alternateBtnFunction("Reset", "Reset")}
        />
      </div>
    );
  }
}
