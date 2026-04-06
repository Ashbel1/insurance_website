import React, { useState } from 'react';

const BankingDetails = ({ data, onChange, onNext, onBack }) => {
  const [local, setLocal] = useState(data || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocal((prev) => ({ ...prev, [name]: value }));
  };



  const handleNext = (e) => {
    e.preventDefault();
    onChange(local);
    onNext();
  };

  return (
    <form className="step-form" onSubmit={handleNext}>
      <h2>Banking Details</h2>
      <div className="form-group">
        <label>Bank Name</label>
        <input name="bankName" value={local.bankName || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Bank Branch Code</label>
        <input name="branchCode" value={local.branchCode || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Bank Account Number</label>
        <input name="accountNumber" value={local.accountNumber || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Branch</label>
        <input name="branch" value={local.branch || ''} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Name of Account Holder</label>
        <input name="accountHolder" value={local.accountHolder || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Do you wish to use bank debit order?</label>
        <select name="debitOrder" value={local.debitOrder || ''} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount 1st day of payment</label>
        <input name="firstPaymentAmount" value={local.firstPaymentAmount || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Day of each month thereafter</label>
        <input name="monthlyPaymentDay" value={local.monthlyPaymentDay || ''} onChange={handleChange} required />
      </div>
      <div className="form-nav">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default BankingDetails;
