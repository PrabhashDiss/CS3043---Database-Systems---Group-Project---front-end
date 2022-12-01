import React, { useState } from 'react';
import axios from 'axios';

function FormCustomer() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/customer').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_id, setCustomerID] = useState('');
    const [loan_number, setLoanNumber] = useState('');
    const add = () => {
      const data = {
        customer_id: customer_id,
        customer_name: customer_name,
        customer_city: customer_city,
        customer_street: customer_street,
        gender: gender,
        address: address,
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
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer City</th>
              <th scope="col">Customer Street</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.customer_id}</th>
                <td>{row.customer_name}</td>
                <td>{row.customer_city}</td>
                <td>{row.customer_street}</td>
                <td>{row.gender}</td>
                <td>{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="customer_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer Name</label>
          <input type="customer_name" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer City</label>
          <input type="customer_city" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer Street</label>
          <input type="customer_street" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Gender</label>
          <input type="gender" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Address</label>
          <input type="address" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormCustomer;
  