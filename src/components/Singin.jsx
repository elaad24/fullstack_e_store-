import React from "react";
import Form from "./common/Form";
import PageHeader from "../components/common/PageHeader";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import userService from "../services/userService";
import { Redirect } from "react-router";

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

  doSubmit = async () => {
    const { data } = this.state;

    try {
      await userService.login(data.email, data.password);

      await setTimeout(() => {
        this.props.history.replace("/");
      }, 2500);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("worng email or password -try again ");
        console.log(err.response.data);
        this.setState({
          errors: {
            email: err.response.data.email,
            password: err.response.data.password,
          },
        });

        return;
      }
    }
  };

  render() {
    // check if the user loged in
    if (userService.getCurrentUser()) return <Redirect to="/" />;
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
