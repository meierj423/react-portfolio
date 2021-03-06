import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage =
          process.env.PUBLIC_URL + "/images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={projects.url}
                title={projects.title}
              >
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <br></br>
                    <p>{projects.tech}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href={projects.repo}>
                <p>Link to GitHub Repo</p>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Take a Look at My Work</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-fifths cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
