import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic =
        process.env.PUBLIC_URL + "/images/" + this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio1}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a
                    href={resumeDownload}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-eye"></i>View Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
