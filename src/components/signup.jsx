import React from "react";
import Form from "./common/Form";
import PageHeader from "../components/common/PageHeader";
import Joi from "joi-browser";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: "",
  };

  schema = {
    name: Joi.string().min(2).max(254).required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).max(254).required().label("Password"),
  };

  doSubmit() {
    console.log("submited");
  }

  render() {
    return (
      <div className="container">
        <PageHeader titleText="sing up page " />

        <div className="row">
          <div className="col-12">
            <form noValidate onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderCheckBox("sign up as seller ", "seller")}
              {this.renderButton("Sign Up")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
