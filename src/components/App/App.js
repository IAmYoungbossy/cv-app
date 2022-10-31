import { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}
