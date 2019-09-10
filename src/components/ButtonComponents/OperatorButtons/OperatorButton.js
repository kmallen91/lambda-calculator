import React from "react";
import {operators} from "../../../data";


const OperatorButton = props =>  {
  return (
    <>
    <button className="operator_button">
      {props.operators.value}
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;