import { Component } from "react";
import './App.css';
class ClassComponent extends Component{
    render(){
        return(
          <div className="class1 , class2">
            <h2>This Is Created Using Class Component</h2>
            <p>This Is Done By Using External CSS</p>
            <p className="red"> This Is Done By Using Inline CSS</p>
          </div>
        )
    }
}
export default ClassComponent