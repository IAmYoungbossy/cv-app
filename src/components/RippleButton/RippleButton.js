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
    return (
      <button
        type="button"
        onClick={this.createRipple}
        onMouseEnter={this.createRipple}
      >
        {this.props.content}
      </button>
    );
  }
}

class value {
  state = {
    input: "",
    inputArr: [],
    edit: false,
  };

  addInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  pushIt = () => {
    if (this.state.input.trim() === "") return;
    this.setState({
      inputArr: [...this.state.inputArr, [this.state.input, false]],
    });
  };

  reset = () => {
    this.setState({
      input: "",
    });
  };

  delete = (index) => {
    const newArr = [...this.state.inputArr];
    newArr.splice(index, 1);
    this.setState({
      inputArr: newArr,
    });
  };

  edit = (item) => {
    this.setState({
      input: item,
    });
  };

  toggleEdit = (index) => {
    const newArr = [...this.state.inputArr];
    newArr[index].splice(1, 1, true);
    this.setState({
      inputArr: newArr,
    });
  };

  nameo = (e, index) => {
    const newArr = [...this.state.inputArr];
    newArr[index].splice(0, 1, e.target.value);
    this.setState({
      inputArr: newArr,
    });
  };

  pushAgain = (index) => {
    const newArr = this.state.inputArr;
    newArr[index].splice(1, 1, false);
    this.setState({
      inputArr: newArr,
    });
  };
}