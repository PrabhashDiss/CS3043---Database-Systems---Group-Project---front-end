import React, { useState } from 'react';
import axios from 'axios';

function FormTransaction() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/transaction').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [transaction_id, setTransactionID] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [transaction_description, setTransactionDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [transaction_timestamp, setTransactionTimestamp] = useState('');
    const [execution_branch_code, setExecutionBranchCode] = useState('');
    const add = () => {
      const data = {
        transaction_id: transaction_id,
        account_number: account_number,
        transaction_description: transaction_description,
        amount: amount,
        transaction_timestamp: transaction_timestamp,
        execution_branch_code: execution_branch_code,
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
              <th scope="col">Transaction ID</th>
              <th scope="col">Account Number</th>
              <th scope="col">Transaction Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Transaction Timestamp</th>
              <th scope="col">Execution Branch Code</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.transaction_id}</th>
                <td>{row.account_number}</td>
                <td>{row.transaction_description}</td>
                <td>{row.amount}</td>
                <td>{row.transaction_timestamp}</td>
                <td>{row.execution_branch_code}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Transaction ID</label>
          <input type="transaction_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Number</label>
          <input type="account_number" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Transaction Description</label>
          <input type="transaction_description" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Amount</label>
          <input type="amount" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Transaction Timestamp</label>
          <input type="transaction_timestamp" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Execution Branch Code</label>
          <input type="execution_branch_code" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormTransaction;
  