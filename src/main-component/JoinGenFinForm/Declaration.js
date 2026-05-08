// Declaration.jsx
import React, { useState } from 'react';

const Declaration = ({ data, onChange, onSubmit, onBack }) => {
  const [local, setLocal] = useState(data || {
    dateOfSigning: '',
    nameAsSignature: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setLocal(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!local.agreeToTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    onChange(local);
    onSubmit(); // calls the parent's handleFinalSubmit
  };

  return (
    <form className="step-form" onSubmit={handleSubmit}>
      <h2>Declaration & Consent</h2>
      <div className="form-group">
        <label>Date of Signing</label>
        <input
          type="date"
          name="dateOfSigning"
         
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Name as Signature</label>
        <input
          name="nameAsSignature"
       
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={local.agreeToTerms}
            onChange={handleChange}
            required
          />
          I agree to terms and conditions
        </label>
      </div>
      <div className="form-nav">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Declaration;