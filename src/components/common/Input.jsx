import React from "react";
import PropTypes from "prop-types";

/* the input component is a generic component that designed for usege anywere in the wabsite that need 
input box 
@params ...rest - you can add after the mandatory params (label,name,error) any parmeter you need that the 
input box will have like type=tel OR placeholder=something    */

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} className="form-control" {...rest} />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

Input.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default Input;
