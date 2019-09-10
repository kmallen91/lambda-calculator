import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export default function Specials() {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials)
  return (
    <div className="special_container">
      {specialsState.map((specials, index)=> (
        <SpecialButton specials={specials} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
