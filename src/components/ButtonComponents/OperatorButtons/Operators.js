import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton"

//import any components needed

//Import your array data to from the provided data file

export default function Operators() {
  const [operatorsState] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div className="operator_container">       
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsState.map((operators, index)=> (
         <OperatorButton key={index} operators={operators} />
       ))}
    </div>
  );
};
