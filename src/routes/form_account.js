  import React, { useState } from 'react';
  import axios from 'axios';
  
  function FormAccount() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/account').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_id, setCustomerID] = useState('');
    const [account_number, setAccountNumber] = useState('');
    const [branch_code, setBranchCode] = useState('');
    const [account_type_id, setAccountTypeID] = useState('');
    const [balance, setBalance] = useState('');
    const [last_active_date, setLastActiveDate] = useState('');
    const [open_date, setOpenDate] = useState('');
    const add = () => {
      const data = {
        account_number: account_number,
        customer_id: customer_id,
        branch_code: branch_code,
        account_type_id: account_type_id,
        balance: balance,
        last_active_date: last_active_date,
        open_date: open_date,
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
              <th scope="col">Account Number</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Branch Code</th>
              <th scope="col">Account Type ID</th>
              <th scope="col">Balance</th>
              <th scope="col">Last Active Date</th>
              <th scope="col">Open Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.account_number}</th>
                <td>{row.customer_id}</td>
                <td>{row.branch_code}</td>
                <td>{row.account_type_id}</td>
                <td>{row.balance}</td>
                <td>{row.last_active_date}</td>
                <td>{row.open_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Number</label>
          <input type="account_number" className="form-control" id="exampleFormControlInput1" value={account_number} onChange={(event) => setAccountNumber(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Customer ID</label>
          <input type="customer_id" className="form-control" id="exampleFormControlInput1" value={customer_id} onChange={(event) => setCustomerID(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Branch Code</label>
          <input type="branch_code" className="form-control" id="exampleFormControlInput1" value={branch_code} onChange={(event) => setBranchCode(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Account Type ID</label>
          <input type="account_type_id" className="form-control" id="exampleFormControlInput1" value={account_type_id} onChange={(event) => setAccountTypeID(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Balance</label>
          <input type="balance" className="form-control" id="exampleFormControlInput1" value={balance} onChange={(event) => setBalance(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Last Active Date</label>
          <input type="last_active_date" className="form-control" id="exampleFormControlInput1" value={last_active_date} onChange={(event) => setLastActiveDate(event.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Open Date</label>
          <input type="open_date" className="form-control" id="exampleFormControlInput1" value={open_date} onChange={(event) => setOpenDate(event.target.value)} />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success" onClick={add}>
            Submit
          </button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormAccount;
  