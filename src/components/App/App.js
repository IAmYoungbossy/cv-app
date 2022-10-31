import { Component } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import FormTopButtons from "../FormTopButtons/FormTopButtons";
import Header from "../Header/Header";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <FormTopButtons />
          <Form />
        </main>
        <Footer />
      </div>
    );
  }
}
