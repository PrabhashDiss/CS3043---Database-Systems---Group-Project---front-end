import React, { useState } from 'react';
import axios from 'axios';

function FormAccountType() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/account_type').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [account_type_id, setAccountTypeID] = useState('');
    const [interest_rate, setInterestRate] = useState('');
    const [min_balance, setMinBalance] = useState('');
    const [plan, setPlan] = useState('');
    const [account_type, setAccountType] = useState('');
    const [withdrawals_per_month, setWithdrawalsPerMonth] = useState('');
    const add = () => {
      const data = {
        account_type_id: account_type_id,
        interest_rate: interest_rate,
        min_balance: min_balance,
        plan: plan,
        account_type: account_type,
        withdrawals_per_month: withdrawals_per_month,
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
              <th scope="col">Account Type ID</th>
              <th scope="col">Interest Rate</th>
              <th scope="col">Min Balance</th>
              <th scope="col">Plan</th>
              <th scope="col">Account Type</th>
              <th scope="col">Withdrawals per Month</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.account_type_id}</th>
                <td>{row.interest_rate}</td>
                <td>{row.min_balance}</td>
                <td>{row.plan}</td>
                <td>{row.account_type}</td>
                <td>{row.withdrawals_per_month}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Interest Rate</label>
          <input type="interest_rate" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Min Balance</label>
          <input type="min_balance" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Plan</label>
          <input type="plan" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Type ID</label>
          <input type="account_type_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Type</label>
          <input type="account_type" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Withdrawals Per Month</label>
          <input type="withdrawals_per_month" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormAccountType;
  