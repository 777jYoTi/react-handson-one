import React from "react";
import './App.css';
function FunctionComponent(){
    return(
        <div className="function1 , function2">
            <h2>This Is Created Using Function Component</h2>
            <p>This Is Done By Using External CSS</p>
            <p className="red">This Is Done By Using Inline CSS</p>
        </div>
    )
}
export default FunctionComponent