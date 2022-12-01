import React, { useState } from 'react';
import axios from 'axios';

function FormLoanType() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/loan_type').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [loan_type_id, setLoanTypeID] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [base_amount, setBaseAmount] = useState('');
    const [interest_rate, setInterestRate] = useState('');
    const add = () => {
      const data = {
        loan_type_id: loan_type_id,
        type: type,
        description: description,
        base_amount: base_amount,
        interest_rate: interest_rate,
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
              <th scope="col">Loan Type ID</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Base Amount</th>
              <th scope="col">Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.loan_type_id}</th>
                <td>{row.type}</td>
                <td>{row.description}</td>
                <td>{row.base_amount}</td>
                <td>{row.interest_rate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Loan Type ID</label>
          <input type="loan_type_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Type</label>
          <input type="type" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Description</label>
          <input type="description" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Base Amount</label>
          <input type="base_amount" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Interest Rate</label>
          <input type="interest_rate" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormLoanType;
  