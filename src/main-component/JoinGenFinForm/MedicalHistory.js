import React, { useState } from 'react';

const conditionsList = [
  'Diabetes',
  'Cancer',
  'Hypertension',
  'Renal/kidney disease',
  'Arthritis',
  'Asthma',
  'Epilepsy',
  'Heart problems',
  'Bone problems',
  'Orthodontics',
  'Gastro intestinal problems',
  'Others',
];

const MedicalHistory = ({ data, onChange, onNext, onBack }) => {
  const [selected, setSelected] = useState(data.conditions || []);
  const [details, setDetails] = useState(data.details || []);
  const [pregnancy, setPregnancy] = useState(data.pregnancy || []);

  const handleConditionChange = (cond) => {
    setSelected((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  const handleDetailChange = (idx, e) => {
    const { name, value } = e.target;
    setDetails((prev) => prev.map((d, i) => i === idx ? { ...d, [name]: value } : d));
  };

  const addDetail = () => setDetails((prev) => [...prev, { name: '', condition: '', medication: '', receiving: '', dateDiagnosed: '', doctor: '' }]);
  const removeDetail = (idx) => setDetails((prev) => prev.filter((_, i) => i !== idx));

  const handlePregnancyChange = (idx, e) => {
    const { name, value } = e.target;
    setPregnancy((prev) => prev.map((p, i) => i === idx ? { ...p, [name]: value } : p));
  };
  const addPregnancy = () => setPregnancy((prev) => [...prev, { name: '', expectedDate: '', doctor: '' }]);
  const removePregnancy = (idx) => setPregnancy((prev) => prev.filter((_, i) => i !== idx));



  const handleNext = (e) => {
    e.preventDefault();
    onChange({ conditions: selected, details, pregnancy });
    onNext();
  };

  return (
    <form className="step-form" onSubmit={handleNext}>
      <h2>Medical History</h2>
      <div className="form-group">
        <label>Do you or any dependents suffer from any of the following?</label>
        <div className="checkbox-group">
          {conditionsList.map((cond) => (
            <label key={cond}>
              <input
                type="checkbox"
                checked={selected.includes(cond)}
                onChange={() => handleConditionChange(cond)}
              />
              {cond}
            </label>
          ))}
        </div>
      </div>
      {selected.length > 0 && (
        <div>
          <h4>Provide details for each condition</h4>
          {details.map((d, idx) => (
            <div className="condition-detail" key={idx}>
              <div className="form-group">
                <label>Name of beneficiary</label>
                <input name="name" value={d.name} onChange={(e) => handleDetailChange(idx, e)} required />
              </div>
              <div className="form-group">
                <label>Name of condition</label>
                <input name="condition" value={d.condition} onChange={(e) => handleDetailChange(idx, e)} required />
              </div>
              <div className="form-group">
                <label>Name of medication</label>
                <input name="medication" value={d.medication} onChange={(e) => handleDetailChange(idx, e)} />
              </div>
              <div className="form-group">
                <label>Are you currently receiving medication?</label>
                <input name="receiving" value={d.receiving} onChange={(e) => handleDetailChange(idx, e)} />
              </div>
              <div className="form-group">
                <label>Date diagnosed</label>
                <input type="date" name="dateDiagnosed" value={d.dateDiagnosed} onChange={(e) => handleDetailChange(idx, e)} />
              </div>
              <div className="form-group">
                <label>Attending Doctor</label>
                <input name="doctor" value={d.doctor} onChange={(e) => handleDetailChange(idx, e)} />
              </div>
              <button type="button" onClick={() => removeDetail(idx)} className="remove-btn">Remove</button>
            </div>
          ))}
          <button type="button" onClick={addDetail}>Add Condition Detail</button>
        </div>
      )}
      <div className="form-group">
        <label>Are you or any dependents pregnant?</label>
        {pregnancy.map((p, idx) => (
          <div className="pregnancy-detail" key={idx}>
            <div className="form-group">
              <label>Name of beneficiary</label>
              <input name="name" value={p.name} onChange={(e) => handlePregnancyChange(idx, e)} />
            </div>
            <div className="form-group">
              <label>Expected delivery date</label>
              <input type="date" name="expectedDate" value={p.expectedDate} onChange={(e) => handlePregnancyChange(idx, e)} />
            </div>
            <div className="form-group">
              <label>Attending Doctor</label>
              <input name="doctor" value={p.doctor} onChange={(e) => handlePregnancyChange(idx, e)} />
            </div>
            <button type="button" onClick={() => removePregnancy(idx)} className="remove-btn">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addPregnancy}>Add Pregnancy Detail</button>
      </div>
      <div className="form-nav">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default MedicalHistory;
