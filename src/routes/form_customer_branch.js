import React, { useState } from 'react';
import axios from 'axios';

function FormCustomerBranch() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/customer_branch').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_branch_id, setCustomerBranchID] = useState('');
    const [customer_id, setCustomerID] = useState('');
    const [branch_code, setBranchCode] = useState('');
    const add = () => {
      const data = {
        customer_branch_id: customer_branch_id,
        customer_id: customer_id,
        branch_code: branch_code,
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
              <th scope="col">Customer Branch ID</th>
              <th scope="col">Customer _ID</th>
              <th scope="col">Branch Code</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.customer_branch_id}</th>
                <td>{row.customer_id}</td>
                <td>{row.branch_code}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="customer_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer Branch</label>
          <input type="customer_branch" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch Code</label>
          <input type="branch_code" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormCustomerBranch;
  