import React, { useState } from 'react';
import axios from 'axios';

function FormBuisness() {
    const [rows, setRows] = useState([]);
    const show = () => {
      axios.get('/buisness').then((response) => {
        console.log(response);
        setRows(response.data);
      });
    };

    const [customer_id, setCustomerID] = useState('');
    const [alliance, setAlliance] = useState('');
    const [incorp_date, setIncorpDate] = useState('');
    const add = () => {
      const data = {
        customer_id: customer_id,
        alliance: alliance,
        incorp_date: incorp_date,
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
              <th scope="col">Alliance</th>
              <th scope="col">Incorp Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <th scope="row">{row.customer_id}</th>
                <td>{row.alliance}</td>
                <td>{row.incorp_date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Alliance</label>
          <input type="alliance" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form- label">Incorp Date</label>
          <input type="incorp_date" className="form-control" id="exampleFormControlInput1" />
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
  
  export default FormBuisness;
  