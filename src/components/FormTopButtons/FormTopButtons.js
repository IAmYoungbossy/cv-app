import { Component } from "react";
import "./FormTopButtons.css"

export default class FormTopButtons extends Component {
  render() {
    return (
      <div className="form-top-btn">
        <button>Preview CV</button>
        <button>Auto FIll</button>
        <button>Reset</button>
      </div>
    );
  }
}
