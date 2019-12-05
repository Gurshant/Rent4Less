import React, { Component } from "react";
import { User, Session } from "../requests";
import FormErrors from './FormErrors/FormErrors';

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const signUpParams = {
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      password: fd.get("password"),
      password_confirmation: fd.get("password_confirmation")
    };
    this.createUser(signUpParams);
  }
  createUser(signUpParams) {
    User.create(signUpParams).then(user => {
      if (user.errors) {
        this.setState({ errors: user.errors })
      } else {
        Session.create({
          email: signUpParams.email,
          password: signUpParams.password
        }).then(data => {
          this.setState({
            errors: []
          });
          this.props.onSignUp();
          this.props.history.push("/listings");
        })
      }
    });
  }
  render() {
    return (
      <main>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
              required
            />
            <FormErrors forField="first_name" errors={this.state.errors} />
          </div>
          <div className="field">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
              required
            />
            <FormErrors forField="last_name" errors={this.state.errors} />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.ext"
              required
            />
            <FormErrors forField="email" errors={this.state.errors} />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="6041234567"
              required
            />
            <FormErrors forField="phone" errors={this.state.errors} />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <FormErrors forField="password" errors={this.state.errors} />
          </div>
          <div className="field">
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Enter your password again"
              required
            />
            <FormErrors forField="password_confirmation" errors={this.state.errors} />
          </div>

          <button className="ui blue button" type="submit">
            Submit
          </button>
        </form>
      </main >
    );
  }
}
