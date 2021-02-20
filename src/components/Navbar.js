import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavitemActive: "",
    };
  }
  activeItem = (x) => {
    if (this.state.NavitemActive.length > 0) {
      document
        .getElementById(this.state.NavitemActive)
        .classList.remove("active");
    }
    this.setState({ NavitemActive: x }, () => {
      document.getElementById(this.state.NavitemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeItem}></Navitem>
          <Navitem
            item="About"
            tolink="/about"
            activec={this.activeItem}
          ></Navitem>
          <Navitem
            item="Education"
            tolink="/education"
            activec={this.activeItem}
          ></Navitem>
          <Navitem
            item="Skills"
            tolink="/skills"
            activec={this.activeItem}
          ></Navitem>
          <Navitem
            item="Contact"
            tolink="/contact"
            activec={this.activeItem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
