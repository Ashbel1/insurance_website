// JoinGenFinForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlan } from '../../context/PlanContext';
import { addToCart } from '../../store/actions/action';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../images/logo.png';
import PrincipalDetails from './PrincipalDetails';
import Dependents from './Dependents';
import MedicalHistory from './MedicalHistory';
import BankingDetails from './BankingDetails';
import Declaration from './Declaration';
import api from '../../api/service/api';  // ✅ import the default axios instance
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
  const dispatch = useDispatch();
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const updateData = (section, data) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  // Final submission using api.post
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    if (!formData.plan) {
      setError('No plan selected. Please go back and choose a plan.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await api.post('/insurance/submit/', formData);
      console.log('Submission successful:', response.data);
      alert(`Submission successful! Reference ID: ${response.data.id}`);
      navigate('/');
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response && err.response.data) {
        setError(JSON.stringify(err.response.data, null, 2));
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    // Add selected plan to cart
    if (selectedPlan) {
      dispatch(addToCart(selectedPlan, 1));
    }
    // Optionally log or alert
    alert('Form submitted! Redirecting to checkout...');
    // Redirect to checkout page
    setTimeout(() => {
      navigate('/checkout');
    }, 1000);
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
          {selectedPlan && (
            <div className="selected-plan-summary bg-yellow-50 border border-yellow-300 rounded p-4 mb-4 text-center">
              <h3 className="text-lg font-bold text-yellow-700 mb-1">Selected Plan: {selectedPlan.name}</h3>
              <div className="text-gray-700">Price: ${selectedPlan.price} / {selectedPlan.covers} {selectedPlan.covers > 1 ? 'people' : 'person'}</div>
              {selectedPlan.extra && <div className="text-gray-600">Extra Dependent: ${selectedPlan.extra}</div>}
              
            </div>
          )}
          {error && (
            <div className="error-message" style={{ color: 'red', background: '#ffeeee', padding: '10px', marginBottom: '15px', borderRadius: '5px' }}>
              <strong>Error:</strong>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{error}</pre>
            </div>
          )}
          {isSubmitting && <div className="submitting">Submitting your application, please wait...</div>}
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