import React, { useState } from 'react';
import axios from 'axios';

function FormBranch() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/branch').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [branch_code, setBranchCode] = useState('');
    const [branch_city, setBranchCity] = useState('');
    const [assets, setAssets] = useState('');
    const [address, setAddress] = useState('');
    const [branch_manager, setBranchManager] = useState('');
    const add = () => {
      const data = {
        branch_code: branch_code,
        branch_city: branch_city,
        assets: assets,
        address: address,
        branch_manager: branch_manager,
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
              <th scope="col">Branch Code</th>
              <th scope="col">Branch City</th>
              <th scope="col">Asssets</th>
              <th scope="col">Address</th>
              <th scope="col">Branch Manager</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.branch_code}</th>
                <td>{row.branch_city}</td>
                <td>{row.assets}</td>
                <td>{row.address}</td>
                <td>{row.branch_manager}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch Code</label>
          <input type="branch_code" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch City</label>
          <input type="branch_city" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Assets</label>
          <input type="assets" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Address</label>
          <input type="address" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Emplyee ID</label>
          <input type="employee_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormBranch;
  