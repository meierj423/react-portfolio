import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row">
          <h2 className="lead">{message}</h2>
        </div>
        <hr />
        <div className="row">
          <div className="widget widget_contact">
            <h4 className="address">Phone and Email</h4>
            <p className="address">
              {name}
              <br />
              {phone}
              <br />
              {email}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
