import React, { useState } from 'react';
import axios from 'axios';

function FormIndividual() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/individual').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_id, setCustomerID] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const add = () => {
      const data = {
        customer_id: customer_id,
        date_of_birth: date_of_birth,
        first_name: first_name,
        last_name: last_name,
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
              <th scope="col">Date of Birth</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.customer_id}</th>
                <td>{row.date_of_birth}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Date Of Birth</label>
          <input type="date_of_birth" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">First Name</label>
          <input type="first_name" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Last Name</label>
          <input type="last_name" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="customer_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormIndividual;
  