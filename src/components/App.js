import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../routes/Home';
import FormAccount from '../routes/form_account';
import FormAccountType from '../routes/form_account_type';
import FormBorrower from '../routes/form_borrower';
import FormBranch from '../routes/form_branch';
import FormBuisness from '../routes/form_buisness';
import FormCustomer from '../routes/form_customer';
import FormCustomerBranch from '../routes/form_customer_branch';
import FormEmployee from '../routes/form_employee';
import FormIndividual from '../routes/form_individual';
import FormLoan from '../routes/form_loan';
import FormLoanPayment from '../routes/form_loan_payment';
import FormLoanType from '../routes/form_loan_type';
import FormTransaction from '../routes/form_transaction';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form_account" element={<FormAccount />} />
          <Route path="form_account_type" element={<FormAccountType />} />
          <Route path="form_borrower" element={<FormBorrower />} />
          <Route path="form_branch" element={<FormBranch />} />
          <Route path="form_buisness" element={<FormBuisness />} />
          <Route path="form_customer" element={<FormCustomer />} />
          <Route path="form_customer_branch" element={<FormCustomerBranch />} />
          <Route path="form_employee" element={<FormEmployee />} />
          <Route path="form_individual" element={<FormIndividual />} />
          <Route path="form_loan" element={<FormLoan />} />
          <Route path="form_loan_payment" element={<FormLoanPayment />} />
          <Route path="form_loan_type" element={<FormLoanType />} />
          <Route path="form_transaction" element={<FormTransaction />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
