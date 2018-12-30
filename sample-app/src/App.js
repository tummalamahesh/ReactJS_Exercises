import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ContactCard from "./ContactCard";

class App extends Component {
  render() {
    return (
      <div className="contacts">
        <ContactCard
          name="Mr. whiskerson"
          imgUrl="http://placekitten.com/300/200"
          phone="Phone: 022-333-1233"
          email="email: whiskerson@gmail.com"
        />
        <ContactCard
          name="Mr. chumimd"
          imgUrl="http://placekitten.com/300/300"
          phone="Phone: 022-333-1233"
          email="email: whiskerson@gmail.com"
        />
        <ContactCard
          name="Mr. gachujd"
          imgUrl="http://placekitten.com/300/400"
          phone="Phone: 022-333-1233"
          email="email: whiskerson@gmail.com"
        />
        <ContactCard
          name="Mr. Chindd"
          imgUrl="http://placekitten.com/300/200"
          phone="Phone: 022-333-1233"
          email="email: whiskerson@gmail.com"
        />
      </div>
    );
  }
}

export default App;
