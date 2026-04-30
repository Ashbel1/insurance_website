import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlan } from '../../context/PlanContext';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png';
import PrincipalDetails from './PrincipalDetails';
import Dependents from './Dependents';
import MedicalHistory from './MedicalHistory';
import BankingDetails from './BankingDetails';
import Declaration from './Declaration';
import './JoinGenFinForm.css';

const steps = [
  'Principal Details',
  'Dependents',
  'Medical History',
  'Banking Details',
  'Declaration',
];

const JoinGenFinForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const { selectedPlan } = usePlan();
  const [formData, setFormData] = useState({
    principal: {},
    dependents: [],
    medical: { conditions: [], details: [], pregnancy: [] },
    banking: {},
    declaration: {},
    plan: selectedPlan || null,
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const updateData = (section, data) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  const handleSubmit = () => {
    // Mock submit: log data
    alert('Form submitted! Check console for data.');
    console.log('Submitted Data:', { ...formData, plan: selectedPlan });
    setTimeout(() => {
      navigate('/');
    }, 1500); // Redirect after 1.5 seconds
  };

  return (
    <>
      <Navbar hclass={'header-style-1'} Logo={Logo} />
      <div
        className="join-genfin-bg"
        style={{
          minHeight: '100vh',
          width: '100vw',
          background: "url('/placeholder-bg.jpg') center center/cover no-repeat #f5f7fa",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="join-genfin-form join-genfin-form-overlay">
          {/* Show selected plan at the top */}
          {selectedPlan && (
            <div className="selected-plan-summary bg-yellow-50 border border-yellow-300 rounded p-4 mb-4 text-center">
              <h3 className="text-lg font-bold text-yellow-700 mb-1">Selected Plan: {selectedPlan.name}</h3>
              <div className="text-gray-700">Price: ${selectedPlan.price} / {selectedPlan.covers} {selectedPlan.covers > 1 ? 'people' : 'person'}</div>
              {selectedPlan.extra && <div className="text-gray-600">Extra Dependent: ${selectedPlan.extra}</div>}
              <div className="text-xs text-gray-500 mt-1">{selectedPlan.tag}</div>
            </div>
          )}
          <div className="form-steps">
            {steps.map((label, idx) => (
              <div key={label} className={`step${step === idx ? ' active' : ''}`}>{label}</div>
            ))}
          </div>
          <div className="form-content">
            {step === 0 && (
              <PrincipalDetails data={formData.principal} onChange={(data) => updateData('principal', data)} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 1 && (
              <Dependents data={formData.dependents} onChange={(data) => updateData('dependents', data)} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 2 && (
              <MedicalHistory data={formData.medical} onChange={(data) => updateData('medical', data)} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 3 && (
              <BankingDetails data={formData.banking} onChange={(data) => updateData('banking', data)} onNext={nextStep} onBack={prevStep} />
            )}
            {step === 4 && (
              <Declaration data={formData.declaration} onChange={(data) => updateData('declaration', data)} onSubmit={handleSubmit} onBack={prevStep} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinGenFinForm;
