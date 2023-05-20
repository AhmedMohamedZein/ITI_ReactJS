import { Component } from "react";
import Register from "../register/register";
import Students from "../students/students"
class Home extends Component{
    constructor(){
        super();
        this.state = {
            Students : []
        }
    }
    Add = (user)=>{
        console.log(user);
        this.setState((prevState) => ({
            Students: [
                ...prevState.Students,
                user
            ]
        }));
        console.log(this.state.Students);
    }
    render(){
        return(
            <div>
                <Register onKeyChange={this.Add}/> 
                <Students list={this.state.Students}/> 
            </div>
        )
    }
}
export default Home;