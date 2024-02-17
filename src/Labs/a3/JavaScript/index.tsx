import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunction from "./WorkingWithFunctions/WorkingWithFunction";
import BooleanVariable from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariablesTypes from "./variables/VariableTypes";
import WorkingWithArray from "./WorkingWithArray/WorkingWithArray";

function JavaScript() {
    console.log("Hello World")
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariablesTypes/>
          <BooleanVariable/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunction/>
          <WorkingWithArray/>
       </div>
    );
 }
 export default JavaScript
 
 