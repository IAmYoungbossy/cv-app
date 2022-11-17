import { Component } from "react";
import RippleButton from "../RippleButton/RippleButton";
import "./FormTopButtons.css";

export default class FormTopButtons extends Component {
  state = {
    btnContent: "Edit",
  };

  changeBtnContent = () => {
    let state;
    if (this.state.btnContent === "Edit") state = "Back";
    else state = "Edit";
    this.setState({ btnContent: state });
  };

  alternateBtnFunction = (oldValue, newValue) => {
    if (this.props.cvCondition) return newValue;
    return oldValue;
  };

  render() {
    return (
      <div className="form-top-btn">
        <RippleButton
          content={this.alternateBtnFunction(
            "Preview CV",
            `${this.state.btnContent}`
          )}
          changeCondition={() => this.props.changeCondition()}
          cvCondition={this.props.cvCondition}
          preview={() => this.props.preview()}
          changeBtnContent={() => this.changeBtnContent()}
        />
        <RippleButton
          content={this.alternateBtnFunction("Auto Fill", "Download")}
          autoFill={() => this.props.autoFill()}
          printCV={() => this.props.printCV()}
        />
        <RippleButton
          content={this.alternateBtnFunction("Reset", "Reset")}
          reset={() => this.props.reset()}
          cvCondition={this.props.cvCondition}
          changeCondition={() => this.props.changeCondition()}
        />
      </div>
    );
  }
}
