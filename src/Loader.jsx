import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//If No message is passed from the App then this default props will be used
Loader.defaultProps = {
  message: "Loading...",
};

export default Loader;
