import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var languages = this.props.data.languages;
      var platforms = this.props.data.platforms;
      var libraries = this.props.data.libraries;
      var databases = this.props.data.databases;
    }

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="skills nine columns main-col">
            <span>Languages: </span>
            <br />
            <span>{languages}</span>
            <br />
            <br />
            <span>Platforms and Frameworks:</span>
            <br />
            <span>{platforms}</span>
            <br />
            <br />
            <span>Libraries: </span>
            <br />
            <span>{libraries}</span>
            <br />
            <br />
            <span>Databases: </span>
            <br />
            <span>{databases}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
