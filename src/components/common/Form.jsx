import { Component } from "react";
import Input from "./Input";
import Joi from "joi-browser";
import Choice from "./choice";

class Form extends Component {
  validateProperty = (name, value) => {
    const propertyObj = { [name]: value };
    const propertySchema = { [name]: this.schema[name] };

    const { error } = Joi.validate(propertyObj, propertySchema);
    return error && error.details[0].message;
  };

  validate = () => {
    const {
      schema,
      state: { data },
    } = this;

    const { error } = Joi.validate(data, schema, { abortEarly: false });

    if (!error) {
      return null;
    }

    const errors = {};
    for (const detailsItem of error.details) {
      errors[detailsItem.path[0]] = detailsItem.message;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) {
      return;
    }
    this.doSubmit();
  };

  handleChange = ({ target: { name, value, type } }) => {
    const { data, errors } = this.state;

    // data
    const updatedData = { ...data };
    updatedData[name] = value;

    if (type === "checkbox") {
      let value = document.getElementsByName("seller")[0].checked;
      updatedData[name] = value;
    }

    // validation
    const updatedErrors = { ...errors };
    const errorMessage = this.validateProperty(name, value);
    updatedErrors[name] = errorMessage;

    // setstate
    this.setState({ data: updatedData, errors: updatedErrors });
  };

  renderInput(name, label, type = "text", ...rest) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        label={label}
        name={name}
        rest={rest}
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
      />
    );
  }

  renderChoice(name, options_list) {
    // to updata the data in renderchoise on-change it diractly saves
    const { data, errors } = this.state;
    let choiseVal = document.getElementsByName(name);
    if (choiseVal[0] === undefined) {
      choiseVal = choiseVal[0];
    } else if (choiseVal[0] !== undefined) {
      choiseVal = choiseVal[0].value;
    }
    return (
      <Choice
        name={name}
        options_list={options_list}
        error={errors[name]}
        onChange={this.handleChange}
        value={choiseVal}
        onChange={(data[name] = choiseVal)}
      />
    );
  }

  renderCheckBox(label, name) {
    return (
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          lable={label}
          name={name}
          onChange={this.handleChange}
        />
        <label class="form-check-label" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
