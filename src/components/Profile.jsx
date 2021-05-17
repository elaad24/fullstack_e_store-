import React from "react";
import PageHeader from "./common/PageHeader";
import userService from "../services/userService";
import { Redirect } from "react-router";

const Profile = () => {
  if (!userService.getCurrentUser()) return <Redirect to="/" />;

  return (
    <div className="container">
      <PageHeader titleText="profile page" />

      <div className="row">
        <div className="col-12">
          <h2>will beilt in the future </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            doloremque labore assumenda expedita quibusdam illo a optio
            laboriosam numquam ipsa temporibus, doloribus odit maiores sequi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
