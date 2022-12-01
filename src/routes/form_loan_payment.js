import React, { useState } from 'react';
import axios from 'axios';

function FormLoanPayment() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/loan_payment').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [payment_id, setPaymentID] = useState('');
    const [loan_number, setLoanNumber] = useState('');
    const [payment_reference_number, setPaymentReferenceNumber] = useState('');
    const [payment_date, setPaymentDate] = useState('');
    const [payment_amount, setPaymentAmount] = useState('');
    const [payment_status, setPaymentStatus] = useState('');
    conast [remarks, setRemarks] = useState('');
    const add = () => {
      const data = {
        payment_id: payment_id,
        loan_number: loan_number,
        payment_reference_number: payment_reference_number,
        payment_date: payment_date,
        payment_amount: payment_amount,
        payment_status: payment_status,
        remarks: remarks,
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
              <th scope="col">Payment ID</th>
              <th scope="col">Loan Number</th>
              <th scope="col">Payment Reference Number</th>
              <th scope="col">Payment Date</th>
              <th scope="col">Payment Amount</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.payment_id}</th>
                <td>{row.loan_number}</td>
                <td>{row.payment_reference_number}</td>
                <td>{row.payment_date}</td>
                <td>{row.payment_amount}</td>
                <td>{row.payment_status}</td>
                <td>{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Loan Number</label>
          <input type="loan_number" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Payment ID</label>
          <input type="payment_id" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Payment Reference Number</label>
          <input type="payment_reference_number" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Payment Date</label>
          <input type="payment_date" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Payment Amount</label>
          <input type="payment_amount" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Proof of Payment</label>
          <input type="proof_of_payment" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Payment Status</label>
          <input type="payment_status" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Remaks</label>
          <input type="remarks" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <button type='submit' className="btn btn-success">Submit</button>
          <button type='reset' className="btn btn-danger">Cancel</button>
        </div>
      </div>
    );
  }
  
  export default FormLoanPayment;
  