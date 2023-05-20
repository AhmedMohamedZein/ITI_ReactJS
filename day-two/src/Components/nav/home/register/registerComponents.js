import { Component } from "react";
import "./register.css"

class Register extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "",
                age: ""
            }
          
        }  
            
    }

    Input = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    Submit = (e) => {
        e.preventDefault();
        console.log('Input values:', this.state.user);
        this.props.onKeyChange(this.state.user)
        this.setState(() => ({
            user: {
                name: "",
                age: ""
            }
        }));
    };

    render() {
        return (
           <div>
 <form  action="#" onSubmit={this.Submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input  name="name"  type="text" className="form-control" value={this.state.user.name} onChange={this.Input}id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Age</label>
          <input type="number"  name="age" className="form-control" value={this.state.user.age} onChange={this.Input} id="age" placeholder="Enter your age" />
        </div>
        <div className="text-center">
                        <button className="btn"  type="submit">Register</button>
                    </div>
        </form>     
                </div>
          
        )
    }
}

export default Register;