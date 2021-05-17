import React from "react";
import Form from "./common/Form";
import PageHeader from "./common/PageHeader";
import Joi from "joi-browser";
import productService from "../services/productService";
import userService from "../services/userService";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { any } from "prop-types";

class AddProduct extends Form {
  state = {
    data: {
      name: "",
      description: "",
      price: "",
      qty: "",
      category: "",
      pic: any,
    },
    errors: "",
  };
  schema = {
    name: Joi.string().required().max(255).min(2).label("Name"),
    description: Joi.string().required().max(1024).min(2).label("Description"),
    price: Joi.number().required().max(9999999).min(0.001).label("Price"),
    qty: Joi.number().required().max(99999999).min(1).label("Quantity"),
    category: Joi.allow("").label("Category"),
    pic: Joi.any().allow("").label("Picture"),
  };

  doSubmit = async (event) => {
    let { userInfo } = this.props;
    const sellerId = userInfo.id;

    const { data } = this.state;
    const { imgSrc } = this;
    try {
      await productService.createproduct({ ...data, seller_id: sellerId });
      toast.success("new item added ! ");

      /*  await setTimeout(() => {
        this.props.history.replace("/");
      }, 1400); */
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast.error("something went worng - try again ");
        console.log(err.response.data);
      }
    }
  };

  render() {
    let { userInfo } = this.props;

    let user_is_seller = userInfo.seller;

    if (!userService.getCurrentUser() || !user_is_seller)
      return <Redirect to="/" />;
    return (
      <div className="container mb-4">
        <PageHeader titleText="add product page" />
        <form noValidate onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("description", "Description")}
          {this.renderChoice("category", [
            "Auto parts & accessories",
            "Fashion",
            "Watches",
            "Books ,Movies& Music",
            "Electronics",
            "Other",
          ])}
          <div className="form-row ">
            <div className="col">
              <label htmlFor={"pic"}>{"Picture"}</label>
              <span className="text-danger">{" * optional"}</span>
              <input
                name={"pic"}
                id={"pic"}
                type="file"
                className="form-control "
                onChange={this.onClickHandler}
              />
            </div>

            {typeof this.imgSrc == "string" ? (
              <div className="col">
                <img
                  className="img-addproduct"
                  src={this.imgSrc}
                  alt="user img "
                />
              </div>
            ) : (
              ""
            )}
          </div>

          {this.renderInput("price", "Price", "number")}
          {this.renderInput("qty", "Quantity", "number")}

          {this.renderButton("upload product")}
        </form>
      </div>
    );
  }

  onClickHandler = () => {
    // get the pic info from htmlElement
    // and change it to base 64
    // and add it to global this
    // make a spred to data and biuld a new data obj
    // and add it to state
    var input = document.getElementById("pic");
    if (input.files[0]) {
      const file = input.files[0];
      var fReader = new FileReader();
      fReader.readAsDataURL(file);
      var self = this;
      return (fReader.onload = function (e) {
        const imgSrc = e.target.result;
        self["imgSrc"] = imgSrc;
        let data = self.state;
        data = { ...data.data, pic: imgSrc };
        self.setState({ data: data });
        return imgSrc;
      });
    }
  };
}

// get inpormation from redux store
const mapStateToProps = (state) => {
  return {
    userInfo: state.userSystem.user.userInfo,
  };
};

export default connect(mapStateToProps)(AddProduct);
