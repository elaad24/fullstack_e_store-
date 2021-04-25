import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ titleText }) => {
  return (
    <div className="row">
      <div className="col-12 mt-4">
        <h1>{titleText}</h1>
      </div>
    </div>
  );
};

PageHeader.prototype = {
  titleText: PropTypes.string.isRequired,
};

export default PageHeader;
