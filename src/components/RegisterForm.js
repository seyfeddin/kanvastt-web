import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default class RegisterForm extends React.Component {
  state = {
    name: null,
    email: null
  };

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value
    });
    this.setState({
      [`${e.target.name}`]: e.target.value
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg;
        }
        var mail_msg = document.getElementsByClassName("mail-msg").item(0);
        mail_msg.innerHTML = msg;
      })
      .catch(err => {
        console.log("err", err);
        var mail_msg = document.getElementsByClassName("mail-msg").item(0);
        mail_msg.innerHTML = err;
      });
  };

  render() {
    return (
      <div>
        <p class="mail-msg">
          Submit the form below and check your browser console!
        </p>
        <div>
          <form onSubmit={this._handleSubmit}>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
