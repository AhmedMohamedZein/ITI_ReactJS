import React, { Component } from "react";

class Students extends Component {
    renderStudent() {
        const { list } = this.props;
        console.log(list)
    
        if (list && list.length > 0) {
          return list.map((student, index) => (
            <tr key={student.id}>
              <th>{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ));
        } else {
          return (
            <tr>
              <td colSpan={3}></td>
            </tr>
          );
        }
      }

  render() {
    return (
      <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
      {this. renderStudent()}
      </tbody>
    </table>
    );
  }
}

export default Students;