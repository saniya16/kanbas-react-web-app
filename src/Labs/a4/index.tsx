import React from "react";
import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DataStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunction";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
function sayHello() {
  alert("Hello");
}
const Assignment4 = () => {
  return(
    <>
      <h1>Assignment 4</h1>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello} />
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>
      <ReduxExamples/>

    </>
  );
};
export default Assignment4;

