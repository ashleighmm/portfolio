import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="BSc Computer Science (Hons)"
          where="University of East London"
          from="September 2017"
          to="July 2020"
        />
      </div>
    );
  }
}
export default Education;
