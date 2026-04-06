import React, { useState } from 'react';

const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed', 'Separated'];
const genderOptions = ['Male', 'Female', 'Other'];


const PrincipalDetails = ({ data, onChange, onNext, onBack }) => {
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
      <h2>Principal Member Details</h2>
      <div className="form-grid-2col">
        <div className="form-group">
          <label>Title</label>
          <input name="title" value={local.title || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Initials</label>
          <input name="initials" value={local.initials || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Surname</label>
          <input name="surname" value={local.surname || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" value={local.firstName || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Marital Status</label>
          <select name="maritalStatus" value={local.maritalStatus || ''} onChange={handleChange} required>
            <option value="">Select</option>
            {maritalStatusOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={local.gender || ''} onChange={handleChange} required>
            <option value="">Select</option>
            {genderOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={local.dob || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ID Number</label>
          <input name="idNumber" value={local.idNumber || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cell 1</label>
          <input name="cell1" value={local.cell1 || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cell 2</label>
          <input name="cell2" value={local.cell2 || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Name of Employer</label>
          <input name="employer" value={local.employer || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <input name="occupation" value={local.occupation || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" value={local.email || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Ec Number</label>
          <input name="ecNumber" value={local.ecNumber || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input name="department" value={local.department || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Station</label>
          <input name="station" value={local.station || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Work Address</label>
          <input name="workAddress" value={local.workAddress || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tel (work)</label>
          <input name="telWork" value={local.telWork || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tel (home)</label>
          <input name="telHome" value={local.telHome || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telephone</label>
          <input name="telephone" value={local.telephone || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Home Address</label>
          <input name="homeAddress" value={local.homeAddress || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Next of Kin</label>
          <input name="nextOfKin" value={local.nextOfKin || ''} onChange={handleChange} />
        </div>
      </div>
      <div className="form-nav">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default PrincipalDetails;
