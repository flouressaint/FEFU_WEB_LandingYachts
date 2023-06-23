import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`btn btn--outline btn--medium`}>{props.value}</button>
  );
}
export default Button;
