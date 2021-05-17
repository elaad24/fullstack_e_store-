import React from "react";
import { Redirect } from "react-router";
import userService from "../services/userService";
const Logout = () => {
  if (!userService.getCurrentUser()) return <Redirect to="/" />;
  userService.logout();
  window.location = "/";
  return null;
};

export default Logout;
