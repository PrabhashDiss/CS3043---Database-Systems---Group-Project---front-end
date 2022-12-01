import React, { useState } from 'react';
import axios from 'axios';

function FormLoan() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/loan').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [loan_number, setLoanNumber] = useState('');
    const [branch_code, setBranchCode] = useState('');
    const [loan_type_id, setLoanTypeID] = useState('');
    const [loan_duration, setLoanDuration] = useState('');
    const [start_date, setStartDate] = useState('');
    const [due_date, setDueDate] = useState('');
    const [is_personal, setIsPersonal] = useState('');
    const [is_online, setIsOnline] = useState('');
    const add = () => {
      const data = {
        loan_number: loan_number,
        branch_code: branch_code,
        loan_type_id: loan_type_id,
        loan_duration: loan_duration,
        interest_rate: interest_rate,
        start_date: start_date,
        due_date: due_date,
        is_personal: is_personal,
        is_online: is_online,
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
              <th scope="col">Loan Number</th>
              <th scope="col">Branch Code</th>
              <th scope="col">Loan Type ID</th>
              <th scope="col">Loan Duration</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Start Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Is Personal?</th>
              <th scope="col">Is Online?</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.loan_number}</th>
                <td>{row.branch_code}</td>
                <td>{row.amount}</td>
                <td>{row.loan_type_id}</td>
                <td>{row.loan_duration}</td>
                <td>{row.interest_rate}</td>
                <td>{row.start_date}</td>
                <td>{row.due_date}</td>
                <td>{row.is_personal}</td>
                <td>{row.is_online}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="loan_number" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch Code</label>
          <input type="branch_code" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Type ID</label>
          <input type="amount" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Balance</label>
          <input type="loan_type_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Number</label>
          <input type="loan_duration" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Last Active Date</label>
          <input type="interest_rate" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Open Date</label>
          <input type="start_date" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Open Date</label>
          <input type="due_date" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Open Date</label>
          <input type="is_personal" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Open Date</label>
          <input type="is_online" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormLoan;
  