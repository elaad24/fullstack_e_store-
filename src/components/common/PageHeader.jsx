import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ titleText }) => {
  return (
    <div className="row  ">
      <div className=" mt-4 mb-2 mx-auto ">
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

PageHeader.prototype = {
  titleText: PropTypes.string.isRequired,
};

export default PageHeader;
