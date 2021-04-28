import React from "react";
import Form from "./common/Form";
import PageHeader from "../components/common/PageHeader";
import Joi from "joi-browser";
import http from "../services/http";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";
import userService from "../services/userService";

class Signin extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: "",
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).max(255).required().label("Password"),
  };

  // need to retun from the backend to redux  the user info after auth and display it on the toast

  doSubmit = async () => {
    const { data } = this.state;

    try {
      await userService.login(data.email, data.password);
      await toast.success(`welcome -  ${data.email}`);
      await setTimeout(() => {
        this.props.history.replace("/");
      }, 5000);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("worng email or password -try again ");
        this.setState({ errors: { email: err.response.data } });
        return;
      }
    }
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="sign-in page " />

        <div className="row">
          <div className="col-12">
            <form noValidate onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}

              {this.renderButton("log in ")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
