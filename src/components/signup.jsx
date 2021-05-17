import React from "react";
import Form from "./common/Form";
import PageHeader from "../components/common/PageHeader";
import Joi from "joi-browser";
import http from "../services/http";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      seller: false,
    },
    errors: "",
  };

  schema = {
    name: Joi.string().min(2).max(254).required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).max(254).required().label("Password"),
    seller: Joi.boolean(),
  };

  doSubmit = async () => {
    const { data } = this.state;

    try {
      await http.post(`${apiUrl}/users/singup`, data);
      toast.success(`you just singup as ${data.name}`);
      if (!data.seller) {
        this.props.history.replace("/singin");
      } else {
        this.props.history.replace("/setUpShop");
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        this.setState({ errors: err.response.data.errors });
      }
    }
  };

  render() {
    // check if the user loged in
    if (userService.getCurrentUser()) return <Redirect to="/" />;
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
