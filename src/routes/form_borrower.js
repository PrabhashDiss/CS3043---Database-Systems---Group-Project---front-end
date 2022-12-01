import React, { useState } from 'react';
import axios from 'axios';

function FormBorrower() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/borrower').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_id, setCustomerID] = useState('');
    const [loan_number, setLoanNumber] = useState('');
    const add = () => {
      const data = {
        customer_id: customer_id,
        loan_number: loan_number,
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
              <th scope="col">Loan Number</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.customer_id}</th>
                <th scope="row">{row.loan_number}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="customer_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Loan Number</label>
          <input type="loan_number" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormBorrower;
  