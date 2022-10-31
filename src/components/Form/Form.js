import { Component } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <form
        action="get"
        method="get"
        acceptCharset="utf-8"
      >
        <PersonalInfo />
      </form>
    );
  }
}
