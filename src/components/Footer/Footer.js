import { Component } from "react";

export default class Footer extends Component {
  render = () => (
    <footer>
      <small>
        Copyright &#169; 2022 IAmYoungbossy{" "}
        <a href="https://github.com/IAmYoungbossy/cv-app">
          <i className="fa fa-github"></i>
        </a>
      </small>
    </footer>
  );
}
