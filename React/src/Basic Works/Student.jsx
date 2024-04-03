import React,{Component} from "react";

class Student extends Component{
    x=10;
    render(){
        return(
        <div >
            <h1>Student Details: {this.x}</h1>
        </div>
        )
    }
}

export default Student;


// class Student extends React.Component{

// }