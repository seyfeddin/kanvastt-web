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
      <div id="register-form">
        <div class="container">
          <h1>Sen de bizim gibi heyecanlı mısın?</h1>
          <p class="mail-msg">
            O halde topluluğun şekillenmesinde söz sahibi olmak ve tüm
            gelişmelerden ilk haberdar olmak istiyorsan, e-posta listesine kayıt
            ol.
          </p>
          <div>
            <form onSubmit={this._handleSubmit}>
              <input
                type="email"
                onChange={this._handleChange}
                placeholder="eposta adresin"
                name="email"
              />
              <input type="submit" value="" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
