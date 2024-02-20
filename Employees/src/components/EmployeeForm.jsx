import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
    };
  }

  addEmployee = () => {
    const user = {
      name: this.state.name,
      job: this.state.job,
    };
    axios.post("https://reqres.in/api/users",user)
        .then((response) => {
        if(response.status== 201){
          alert("New Employee added Successfully");
          this.setState({name: "", job: ""});
        }
      })
      .catch((error) => {
        alert("Error " +error.message);
      });
  };
  // Lifecycle Method
  // componentDidMount(){
  //   console.log("ComponentDidMount");
  // }
  // componentDidUpdate(){
  //   console.log("ComponentDidUpdate");
  // }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }
  render() {
    return (
      <div className="employeeForm">
        <form className="formField">
          <h1 className="formHeader">New Employee</h1>

          <input
            type="text"
            placeholder="Employee Name"
            value={this.state.name}
            onChange={(e)=> this.setState({name: e.target.value})}
          ></input>

          <input
            type="text"
            placeholder="Designation"
            value={this.state.job}
            onChange={(e) => this.setState({job: e.target.value })}
          ></input>

          <button type="button" id="btn" onClick={this.addEmployee}>
            Add Employee
          </button>
          <Link to="/">
            <button type="button" id="btn1">
              Back
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
export default EmployeeForm;
