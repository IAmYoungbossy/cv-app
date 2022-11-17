import { Component } from "react";

export default class RippleButton extends Component {
  createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  };

  btnFunctions = (e) => {
    this.createRipple(e);
    if (this.props.content === "Reset") {
      this.props.reset();
      if (this.props.cvCondition) this.props.changeCondition();
    }
    if (this.props.content === "Download") this.props.printCV()
    if (this.props.content === "Auto Fill") this.props.autoFill();
    if (this.props.content === "Edit") this.props.changeCondition();
    if (this.props.content === "Preview CV" || this.props.content === "Back") {
      this.props.changeCondition();
      this.props.preview();
      this.props.changeBtnContent();
    }
    if (this.props.content === "Print View") {
      this.props.formAction();
      this.props.changeCondition();
      this.createRipple(e);
    }
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.btnFunctions}
        onMouseEnter={this.createRipple}
      >
        {this.props.content}
      </button>
    );
  }
}
