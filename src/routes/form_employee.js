import React, { useState } from 'react';
import axios from 'axios';

function FormEmployee() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/employee').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [employee_id, setEmployeeID] = useState('');
    const [branch_code, setBranchCode] = useState('');
    const [employee_name, setEmployeeName] = useState('');
    const add = () => {
      const data = {
        employee_id: employee_id,
        branch_code: branch_code,
        employee_name: employee_name,
      };
      axios.post('/account-add', data).then((response) => {
        console.log(response);
      });
    };

    return (
      <div className="container mt-3 mb-3">
        <div className="mb-3">
          <button type='show' className="btn btn-success" onClick={show}>
            Show
          </button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Branch Code</th>
              <th scope="col">Employee Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.employee_id}</th>
                <td>{row.branch_code}</td>
                <td>{row.employee_name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Employee ID</label>
          <input type="employee_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch Code</label>
          <input type="branch_code" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Employee Name</label>
          <input type="employee_name" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormEmployee;
  