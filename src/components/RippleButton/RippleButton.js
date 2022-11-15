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
  render() {
    if (this.props.content === "Print View") {
      return (
        <button
          type="button"
          onClick={(e) => {
            this.props.formAction();
            this.props.changeCondition();
            this.createRipple(e);
          }}
          onMouseEnter={this.createRipple}
        >
          {this.props.content}
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={(e) => {
          this.createRipple(e);
          if (this.props.content === "Edit") this.props.changeCondition();
        }}
        onMouseEnter={this.createRipple}
      >
        {this.props.content}
      </button>
    );
  }
}
