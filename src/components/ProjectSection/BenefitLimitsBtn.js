import React from "react";
import "./benefit-limits-modal-fix.css";

function BenefitLimitsBtn({ planKey, isOpen, onOpen, onClose, className }) {
    // --- Plan benefits data (do not remove, user wants this info in modal) ---
    const PLAN_BENEFITS = {
        PREMIUM: [
            ["GENERAL PRACTITIONER", "Covered in full", "Immediate"],
            ["PRESCRIBED MEDICATION", "Covered in full", "Immediate"],
            ["CHRONIC MEDICATION", "30% of total premium", "Immediate"],
            ["LAB SERVICES", "Covered in full", "Immediate"],
            ["Xrays & Scans", "Covered in full", "Immediate"],
            ["MRI", "$350.00", "12 Months"],
            ["CT SCANS", "$350.00", "12 Months"],
            ["HOSPITAL", "$660.00", "6 Months"],
            ["PHYSICIANS", "Paid according preauthorisation", "6 Months"],
            ["MATERNITY", "Paid according preauthorisation", "9 Months"],
            ["OPTICIAN", "Covered in full (every 3 years)", "Immediate"],
            ["SPECIALIST", "$660.00", "6 to 24 Months (depending on service)"],
        ],
        PRESTIGE: [
            ["GENERAL PRACTITIONER", "Covered in full", "Immediate"],
            ["PRESCRIBED MEDICATION", "Covered in full", "Immediate"],
            ["CHRONIC MEDICATION", "30% of total premium", "Immediate"],
            ["LAB SERVICES", "Covered in full", "Immediate"],
            ["Xrays & Scans", "Covered in full", "Immediate"],
            ["MRI", "$350.00", "12 Months"],
            ["CT SCANS", "$350.00", "12 Months"],
            ["HOSPITAL", "$880.00", "6 Months"],
            ["PHYSICIANS", "Paid according preauthorisation", "6 Months"],
            ["MATERNITY", "Paid according preauthorisation", "9 Months"],
            ["OPTICIAN", "Covered in full (every 3 years)", "Immediate"],
            ["SPECIALIST", "$880.00", "6 to 24 Months (depending on service)"],
        ],
        GOLD: [
            ["GENERAL PRACTITIONER", "Covered in full", "Immediate"],
            ["PRESCRIBED MEDICATION", "Covered in full", "Immediate"],
            ["CHRONIC MEDICATION", "30% of total premium", "Immediate"],
            ["LAB SERVICES", "Covered in full", "Immediate"],
            ["Xrays & Scans", "Covered in full", "Immediate"],
            ["MRI", "$500.00", "12 Months"],
            ["CT SCANS", "$500.00", "12 Months"],
            ["HOSPITAL", "$1,350.00", "6 Months"],
            ["PHYSICIANS", "Paid according preauthorisation", "6 Months"],
            ["MATERNITY", "Paid according preauthorisation", "9 Months"],
            ["OPTICIAN", "Covered in full (every 3 years)", "Immediate"],
            ["SPECIALIST", "$1,350.00", "6 to 24 Months (depending on service)"],
        ],
        DIAMOND: [
            ["GENERAL PRACTITIONER", "Covered in full", "Immediate"],
            ["PRESCRIBED MEDICATION", "Covered in full", "Immediate"],
            ["CHRONIC MEDICATION", "30% of total premium", "Immediate"],
            ["LAB SERVICES", "Covered in full", "Immediate"],
            ["Xrays & Scans", "Covered in full", "Immediate"],
            ["MRI", "$350.00", "12 Months"],
            ["CT SCANS", "$350.00", "12 Months"],
            ["HOSPITAL", "$2,200.00", "6 Months"],
            ["PHYSICIANS", "Paid according preauthorisation", "6 Months"],
            ["MATERNITY", "Paid according preauthorisation", "9 Months"],
            ["OPTICIAN", "Covered in full (every 3 years)", "Immediate"],
            ["SPECIALIST", "$2,200.00", "6 to 24 Months (depending on service)"],
        ],
        MAXIMA: [
            ["Global limit", "USD$10,000 per annum", ""],
            ["A & R, 24 HR CLINICS & CASUALTIES", "4 visits", ""],
            ["General practitioners", "Paid in full according to tariff", ""],
            ["HDU AND ICU", "US$2,500 per annum", ""],
            ["GENERAL WARD", "US$1,500 per annum", ""],
            ["Prescription drugs", "US$300 per annum", ""],
            ["Haemodialysis", "USD 500 (subject to pre-authorisation)", ""],
            ["Chemotherapy", "USD 500 (subject to pre-authorisation)", ""],
            ["Chronic drugs", "Subject to pre-authorisation", ""],
            ["Dentistry", "US$600 per annum", ""],
            ["Refraction", "Paid in full according to tariff", ""],
            ["Physician", "Paid according to tariff up to USD $1,000", ""],
            ["Optical", "US$350 per three years", ""],
            ["Maternity", "US$1,000 per annum", ""],
            ["Family planning", "US$200 per annum", ""],
            ["Hearing Aids", "US$250 per 2 years", ""],
            ["Pathology", "USD $600", ""],
            ["Imaging – Radiology & Ultrasound", "Paid in full according to tariff up to USD 300 per annum", ""],
            ["Imaging – MRI, CT & PET", "1 visit per year", ""],
            ["Blood transfusion", "Paid in full according to tariff up to USD 500", ""],
            ["Psychiatric services", "Paid in full according to tariff", ""],
            ["Rehab services", "12 sessions per annum at USD 30/session (according to tariff)", ""],
            ["Prostheses", "Subject to pre-authorisation", ""],
            ["Private Ambulance", "Paid in full according to tariff up to 5 calls", ""],
            ["Foreign treatment", "Covers medication only (no transport/accommodation), India only for now", ""],
            ["Anaesthetist & Orthopedic", "Paid in full according to tariff up to USD $1,000", ""],
            ["Gynaecologist", "Paid in full up to USD $1,000", ""],
            ["Labs", "USD 200 per annum", ""],
        ],
        LINK: [
            ["Global limit", "USD$6,500 per annum", ""],
            ["A & R, 24 HR CLINICS & CASUALTIES", "4 visits", ""],
            ["General practitioners", "Paid in full according to tariff", ""],
            ["HDU AND ICU", "US$1,500 per annum", ""],
            ["GENERAL WARD", "US$1,000 per annum", ""],
            ["Prescription drugs", "US$180 per annum", ""],
            ["Haemodialysis", "USD 320 (subject to pre-authorisation)", ""],
            ["Chemotherapy", "USD 320 (subject to pre-authorisation)", ""],
            ["Chronic drugs", "Subject to pre-authorisation", ""],
            ["Dentistry", "US$400 per annum", ""],
            ["Refraction", "Paid in full according to tariff", ""],
            ["Physician", "Paid according to tariff up to USD $600", ""],
            ["Optical", "US$350 per three years", ""],
            ["Maternity", "US$750 per annum", ""],
            ["Family planning", "US$200 per annum", ""],
            ["Hearing Aids", "US$250 per 2 years", ""],
            ["Pathology", "USD $400", ""],
            ["Imaging – Radiology & Ultrasound", "Paid in full according to tariff up to USD 250 per annum", ""],
            ["Imaging – MRI, CT & PET", "1 visit per year", ""],
            ["Blood transfusion", "Paid in full according to tariff up to USD 500", ""],
            ["Psychiatric services", "Paid in full according to tariff", ""],
            ["Rehab services", "10 sessions per annum at USD 30/session (according to tariff)", ""],
            ["Prostheses", "Subject to pre-authorisation", ""],
            ["Private Ambulance", "Paid in full according to tariff up to 5 calls", ""],
            ["Foreign treatment", "Does not cover", ""],
            ["Anaesthetist & Orthopedic", "Paid in full according to tariff up to USD $750", ""],
            ["Gynaecologist", "Paid in full up to USD $750", ""],
            ["Labs", "USD 200 per annum", ""],
        ],
        TERTIARY: [
            ["Global limit", "USD$5,000 per annum", ""],
            ["A & R, 24 HR CLINICS & CASUALTIES", "4 visits", ""],
            ["General practitioners", "Paid in full according to tariff", ""],
            ["HDU AND ICU", "US$1,200 per annum", ""],
            ["GENERAL WARD", "US$800 per annum", ""],
            ["Prescription drugs", "US$150 per annum", ""],
            ["Haemodialysis", "USD 250 (subject to pre-authorisation)", ""],
            ["Chemotherapy", "USD 250 (subject to pre-authorisation)", ""],
            ["Chronic drugs", "Subject to pre-authorisation", ""],
            ["Dentistry", "US$300 per annum", ""],
            ["Refraction", "Paid in full according to tariff", ""],
            ["Physician", "Paid according to tariff up to USD $500", ""],
            ["Optical", "US$350 per three years", ""],
            ["Maternity", "US$500 per annum", ""],
            ["Family planning", "US$200 per annum", ""],
            ["Hearing Aids", "US$250 per 2 years", ""],
            ["Pathology", "USD $300", ""],
            ["Imaging – Radiology & Ultrasound", "Paid in full according to tariff up to USD 200 per annum", ""],
            ["Imaging – MRI, CT & PET", "1 visit per year", ""],
            ["Blood transfusion", "Paid in full according to tariff up to USD 500", ""],
            ["Psychiatric services", "Paid in full according to tariff", ""],
            ["Rehab services", "8 sessions per annum at USD 30/session (according to tariff)", ""],
            ["Prostheses", "Subject to pre-authorisation", ""],
            ["Private Ambulance", "Paid in full according to tariff up to 5 calls", ""],
            ["Foreign treatment", "Does not cover", ""],
            ["Anaesthetist & Orthopedic", "Paid in full according to tariff up to USD $500", ""],
            ["Gynaecologist", "Paid in full up to USD $500", ""],
            ["Labs", "USD 200 per annum", ""],
        ],
        ESSENTIAL: [
            ["Global limit", "USD$2,500 per annum", ""],
            ["A & R, 24 HR CLINICS & CASUALTIES", "4 visits", ""],
            ["General practitioners", "Paid in full according to tariff", ""],
            ["HDU AND ICU", "US$615 per annum", ""],
            ["GENERAL WARD", "US$500 per annum", ""],
            ["Prescription drugs", "US$80 per annum", ""],
            ["Haemodialysis", "USD 130 (subject to pre-authorisation)", ""],
            ["Chemotherapy", "USD 130 (subject to pre-authorisation)", ""],
            ["Chronic drugs", "Subject to pre-authorisation", ""],
            ["Dentistry", "US$150 per annum", ""],
            ["Refraction", "Paid in full according to tariff", ""],
            ["Physician", "Paid according to tariff up to USD $210", ""],
            ["Optical", "US$350 per three years", ""],
            ["Maternity", "US$250 per annum", ""],
            ["Family planning", "US$200 per annum", "NOT COVERED"],
            ["Hearing Aids", "US$100 per 2 years", ""],
            ["Pathology", "USD $150", ""],
            ["Imaging – Radiology & Ultrasound", "Paid in full according to tariff up to USD 150 per annum", ""],
            ["Imaging – MRI, CT & PET", "1 visit per year", ""],
            ["Blood transfusion", "Paid in full according to tariff up to USD 500", ""],
            ["Psychiatric services", "Paid in full according to tariff", ""],
            ["Rehab services", "6 sessions per annum at USD 30/session (according to tariff)", ""],
            ["Prostheses", "Subject to pre-authorisation", ""],
            ["Private Ambulance", "Paid in full according to tariff up to 5 calls", "GOVERNMENT AMBULANCES ONLY"],
            ["Foreign treatment", "Does not cover", ""],
            ["Anaesthetist & Orthopedic", "Paid in full according to tariff up to USD $250", ""],
            ["Gynaecologist", "Paid in full up to USD $1,000", ""],
            ["Labs", "USD 200 per annum", ""],
            ["Plan restriction", "–", "Covers Government hospitals and Genfin surgeries only"],
        ],

    };

    const table = PLAN_BENEFITS[planKey?.toUpperCase()] || [];

    // Prevent background scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Improved modal: more visible overlay, border, shadow, always visible close button
    return (
        <>
            <button
                className={`w-full flex items-center justify-center gap-1 px-2 py-2 border border-blue-300 text-blue-700 bg-white text-xs font-semibold ${className || ''}`}
                onClick={onOpen}
                type="button"
            >
                <span>Benefit limits</span>
                <span>&#9660;</span>
            </button>
            {isOpen && (
                <div
                    className="benefit-limits-modal-overlay"
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                    onClick={onClose}
                >
                    <div
                        style={{ background: '#fff', borderRadius: 10, padding: 28, minWidth: 340, maxWidth: 640, maxHeight: '80vh', overflowY: 'auto', position: 'relative', border: '2px solid #2563eb', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button style={{ position: 'absolute', top: 10, right: 18, fontSize: 28, background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', fontWeight: 700, zIndex: 10 }} onClick={onClose} aria-label="Close">&times;</button>
                        <h3 style={{ fontWeight: 700, fontSize: 24, marginBottom: 18, color: '#1e293b' }}>{planKey} Benefit Limits</h3>
                        <table style={{ width: '100%', fontSize: 15, borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'left', borderBottom: '1px solid #e0e7ef', padding: 9, color: '#2563eb' }}>Service</th>
                                    <th style={{ textAlign: 'left', borderBottom: '1px solid #e0e7ef', padding: 9, color: '#2563eb' }}>Limit</th>
                                    {table.some(row => row[2]) && <th style={{ textAlign: 'left', borderBottom: '1px solid #e0e7ef', padding: 9, color: '#2563eb' }}>{planKey?.toUpperCase() === 'ESSENTIAL' ? 'Additional Note' : 'Waiting Period'}</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {table.map(([service, limit, extra], i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f1f5fa' }}>
                                        <td style={{ padding: 9, fontWeight: 500 }}>{service}</td>
                                        <td style={{ padding: 9 }}>{limit}</td>
                                        {table.some(row => row[2]) && <td style={{ padding: 9 }}>{extra}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}

export default BenefitLimitsBtn;