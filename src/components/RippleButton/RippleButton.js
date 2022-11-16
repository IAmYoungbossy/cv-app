import { Component } from "react";

export default class RippleButton extends Component {
  state = {
    state: true,
  };

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

  changeState = () => {
    let state;
    if (this.state.state) state = false;
    state = true;
    this.setState({ state: state });
  };

  btnContent = () => {
    if (this.state.state) return this.props.content;
    return "Back";
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
          if (this.props.content === "Preview CV") {
            this.props.preview();
            this.props.changeCondition();
            this.changeState();
          }
        }}
        onMouseEnter={this.createRipple}
      >
        {this.btnContent()}
      </button>
    );
  }
}
