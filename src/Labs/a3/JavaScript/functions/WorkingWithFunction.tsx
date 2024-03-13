import ArrowFunction from "./ArrowFunctions";
import ES5Functions from "./ES5Functions"
import FunctionParanthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunction(){
    return(
        <div>
            <ES5Functions/>
            <ArrowFunction/>
            <ImpliedReturn/>
            <FunctionParanthesisAndParameters/>
        </div>
    );
}
export default WorkingWithFunction
