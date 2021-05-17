import React from "react";
import PropTypes from "prop-types";

/* the input component is a generic component that designed for usege anywere in the wabsite that need 
input box 
@params ...rest - you can add after the mandatory params (label,name,error) any parmeter you need that the 
input box will have like type=tel OR placeholder=something    */

const Choice = ({ name, error, options_list }) => {
  return (
    <div className="input-group mb-3">
      <select name={name} className="custom-select" placeholder="Choose...">
        {options_list.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div className="input-group-append">
        <label className="input-group-text" htmlFor={name}>
          Choose From Options
        </label>
      </div>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

Choice.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  options_list: PropTypes.array.isRequired,
};

export default Choice;
