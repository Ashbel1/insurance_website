import React, { useState, useState as useConfetti } from 'react';
import { FaUsers, FaSmileBeam } from 'react-icons/fa';
import Confetti from 'react-confetti';

const genderOptions = ['Male', 'Female', 'Other'];
const relationshipOptions = ['Spouse', 'Child', 'Parent', 'Other'];

const emptyDependent = {
  firstName: '',
  initials: '',
  surname: '',
  dob: '',
  relationship: '',
  gender: '',
  idNumber: '',
};

const Dependents = ({ data, onChange, onNext, onBack }) => {
  const [dependents, setDependents] = useState(data && data.length ? data : [emptyDependent]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    setDependents((prev) => prev.map((dep, i) => i === idx ? { ...dep, [name]: value } : dep));
  };

  const addDependent = () => setDependents((prev) => [...prev, emptyDependent]);
  const removeDependent = (idx) => setDependents((prev) => prev.filter((_, i) => i !== idx));



  const handleNext = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      onChange(dependents);
      onNext();
    }, 800);
  };

  return (
    <div className="step-bg" style={{ background: "url('/placeholder-bg.jpg') center/cover no-repeat #f5f7fa" }}>
      {showConfetti && <Confetti numberOfPieces={180} recycle={false} width={window.innerWidth} height={window.innerHeight} />} 
      <form className="step-form fade-in" onSubmit={handleNext}>
        <div className="step-header">
          <FaUsers size={38} color="#007bff" style={{marginBottom: 8}} />
          <h2>Welcome! Let’s add your dependents <FaSmileBeam size={28} color="#ffc107" style={{verticalAlign: 'middle'}} /></h2>
          <p className="welcome-msg">Thank you for choosing GenFin! You’re one step closer to peace of mind for your family. Please add your dependents below.</p>
        </div>
        {dependents.map((dep, idx) => (
          <div className="dependent-group" key={idx}>
            <h4>Dependent {idx + 1}</h4>
            <div className="form-group">
              <label>First Name</label>
              <input name="firstName" value={dep.firstName} onChange={(e) => handleChange(idx, e)} required />
            </div>
            <div className="form-group">
              <label>Initials</label>
              <input name="initials" value={dep.initials} onChange={(e) => handleChange(idx, e)} />
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input name="surname" value={dep.surname} onChange={(e) => handleChange(idx, e)} required />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" value={dep.dob} onChange={(e) => handleChange(idx, e)} required />
            </div>
            <div className="form-group">
              <label>Relationship</label>
              <select name="relationship" value={dep.relationship} onChange={(e) => handleChange(idx, e)} required>
                <option value="">Select</option>
                {relationshipOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" value={dep.gender} onChange={(e) => handleChange(idx, e)} required>
                <option value="">Select</option>
                {genderOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>ID Number</label>
              <input name="idNumber" value={dep.idNumber} onChange={(e) => handleChange(idx, e)} required />
            </div>
            {dependents.length > 1 && (
              <button type="button" onClick={() => removeDependent(idx)} className="remove-btn">Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addDependent}>Add Dependent</button>
        <div className="form-nav">
          <button type="button" onClick={onBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Dependents;
