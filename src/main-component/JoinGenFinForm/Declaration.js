import React, { useState } from 'react';

const Declaration = ({ data, onChange, onSubmit, onBack }) => {
  const [local, setLocal] = useState(data || {});
  const [agreed, setAgreed] = useState(!!local.agreed);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAgreed(checked);
      setLocal((prev) => ({ ...prev, agreed: checked }));
    } else {
      setLocal((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    onChange(local);
    onSubmit();
  };

  return (
    <form className="step-form" onSubmit={handleSubmit}>
      <h2>Declaration & Consent</h2>
      <div className="form-group">
        <label>Date of Signing</label>
        <input type="date" name="signDate" value={local.signDate || ''} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Name as Signature</label>
        <input name="signature" value={local.signature || ''} onChange={handleChange} required />
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input type="checkbox" name="agreed" checked={agreed} onChange={handleChange} required />
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
