import React from "react";
import PageHeader from "./common/PageHeader";

const PageNotFound404 = () => {
  return (
    <div className="container">
      <PageHeader titleText="Error 404 page not found" />

      <div className="row">
        <div className="col-12">
          <p>the page that you looked for is not here</p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound404;
