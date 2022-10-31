import { Component } from "react";
import RippleButton from "../RippleButton/RippleButton";
import "./FormTopButtons.css";

export default class FormTopButtons extends Component {
  render() {
    return (
      <div className="form-top-btn">
        <RippleButton content="Preview CV" />
        <RippleButton content="Auto Fill" />
        <RippleButton content="Reset" />
      </div>
    );
  }
}
