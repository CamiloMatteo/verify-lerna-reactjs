import React from "react";

const PageError = (props) => (
  <div className="PageError">{props.error.message}</div>
);

export default PageError;