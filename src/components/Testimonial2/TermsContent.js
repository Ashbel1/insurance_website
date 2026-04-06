import React from 'react';
import { Shield, AlertCircle, Clock, FileText, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';

const TermsContent = () => {
  const waitingPeriodsGeneral = [
    { benefit: "Ct/ MRI Ultra Sound Scan", period: "12 months" },
    { benefit: "Specialist Letter of Guarantee", period: "12 months" },
    { benefit: "Downgrading Package", period: "12 months" },
    { benefit: "Elective Surgery (with pre-authorization)", period: "12 months" },
    { benefit: "Chemotherapy", period: "24 months" },
    { benefit: "Hemodialysis", period: "24 months" },
    { benefit: "Prosthesis/Dentures", period: "24 months" },
    { benefit: "Pre-existing conditions", period: "24 months" },
    { benefit: "General Service", period: "3 months" },
  ];

  const waitingPeriodsAdditional = [
    { benefit: "HDU / ICU (with pre-authorization)", period: "12 months" },
    { benefit: "Upgrading Package", period: "3 months" },
    { benefit: "Hospitalization", period: "6 months" },
    { benefit: "Spectacles", period: "12 months" },
    { benefit: "Dental", period: "6 months" },
    { benefit: "Specialist Treatment (with pre-authorization)", period: "12 months" },
    { benefit: "Chronic Medication", period: "On going" },
    { benefit: "Hearing Aids", period: "6 months" },
    { benefit: "Antenatal/ Maternity", period: "12 months" },
  ];

  const coveredServices = [
    "General Practitioner medical services",
    "Basic dental services",
    "Anesthetist services",
    "Physician services",
    "Hospital admissions",
    "General X rays",
    "Emergency casualty consultations",
    "Emergency Hospital admission",
    "Laboratory services",
    "Ambulance services",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8  border-gray-100">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 mt-2 rounded text-white" style={{background: 'linear-gradient(90deg, #FFD700 0%, #FFC300 100%)'}}>
            <div className="flex items-center gap-3 mb-2">
             
             <h1 className="text-2xl md:text-3xl font-bold text-center text-yellow-900"> Effective From Date Of Membership Activation</h1>
            </div>
            
          </div>
          <div className="p-6 md:p-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
              <p className="text-yellow-800 font-medium flex items-start gap-2">
                <AlertCircle className="w-5 h-5 " /> By paying for Genfin Medical Aid Fund services, you have automatically become a member. All subscriptions are <strong>non-refundable</strong>.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" /> Membership & Services
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All services (primary, secondary, tertiary) require authorization – call <strong className="text-blue-600">+263786 323 131</strong></li>
                <li>Scheme benefits are provided on enquiry</li>
                <li>You become a full member after paying <strong>SIX (6) full months' subscriptions</strong></li>
                <li>Members must subscribe for at least one year without fail</li>
                <li>Waiting period: <strong>3 months</strong> for the initial year of services</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" /> Covered Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4">
                {coveredServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" /> Waiting Periods
              </h2>
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-bold text-blue-700 mb-4 text-center">General Waiting Periods</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-xl">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Benefit</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Waiting Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {waitingPeriodsGeneral.map((item, idx) => (
                          <tr key={idx} className="border-t border-gray-100 hover:bg-blue-50">
                            <td className="px-4 py-2 text-gray-700">{item.benefit}</td>
                            <td className="px-4 py-2 font-medium text-blue-900">{item.period}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                  <h3 className="text-lg font-bold text-purple-700 mb-4 text-center">Additional Waiting Periods</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-xl">
                      <thead className="bg-purple-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Benefit</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Waiting Period</th>
                        </tr>
                      </thead>
                      <tbody>
                        {waitingPeriodsAdditional.map((item, idx) => (
                          <tr key={idx} className="border-t border-gray-100 hover:bg-purple-50">
                            <td className="px-4 py-2 text-gray-700">{item.benefit}</td>
                            <td className="px-4 py-2 font-medium text-purple-900">{item.period}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Important Rules</h2>
              <div className="space-y-3 text-gray-700">
                <p><XCircle className="inline w-4 h-4 text-red-500 mr-1" /> A penalty will be charged for members who subscribe to access services and then deliberately stop paying after hospital procedures. Penalty = cost of surgery.</p>
                <p><XCircle className="inline w-4 h-4 text-red-500 mr-1" /> If a member fails to pay one month's subscription, membership is automatically cancelled. Reapplication requires paying double the following month.</p>
                <p><XCircle className="inline w-4 h-4 text-red-500 mr-1" /> If you miss a monthly subscription, you must bring payments up to date before accessing services.</p>
                <p><XCircle className="inline w-4 h-4 text-red-500 mr-1" /> Members must fully disclose medical history. Genfin is not liable for complications from non-disclosure.</p>
                <p><XCircle className="inline w-4 h-4 text-red-500 mr-1" /> All payouts of $350.00 require pre-authorization. Benefit limits subject to scheme – enquire at <strong>+263786232131</strong>.</p>
              </div>

              {/* Declaration Card */}
              <div className="mt-10    rounded-xl p-6  shadow-sm">
                <h2 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-4">
                  <AlertCircle className="w-6 h-6" /> Declaration (Very Important – Please read carefully)
                </h2>
                <div className="space-y-4 text-gray-800 text-sm md:text-base">
                  <p><strong>I, the Applicant,</strong> hereby agree that this application and declaration together with any other statement and/or declaration made by me shall be the basis of and form part of the contract between me and the insurer. I apply for and agree to accept membership in the form and containing the provisions ordinarily adopted by the insurer for the benefits stated in the application.</p>
                  <p><strong>I declare</strong> that I and the above-named dependents are not seriously ill at the time of applying for this cash funeral assurance and that I have not been influenced by any underlying adverse health condition. I understand that the insurer shall be liable for any claim if death occurs due to natural causes before the expiry of three (3) consecutive months from the commencement of membership or reinstatement date.</p>
                  <p><strong>I declare</strong> that the answers to the questions concerning me and my dependents are true and correct, and that no material information has been withheld, misstated, or concealed. I agree that if any material information has been withheld or is incorrect, the contract will be invalid and all premiums paid will be forfeited.</p>
                  <p><strong>I undertake</strong> to inform the company of any change in health of myself or any dependent from the date of this application to the commencement date of membership, and agree to accept any terms and conditions imposed if there is a material change in health, failing which this contract will be null and void.</p>
                </div>
              </div>

              <div className="mt-8 text-center text-gray-700 text-sm border-t pt-6">
                <div className="inline-block w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl px-6 py-4 mb-2" style={{background: 'linear-gradient(90deg, #FFD700 0%, #FFC300 100%)'}}>
                  <p className="font-semibold text-yellow-900">Once you join Genfin Medical Aid Fund, your subscriptions are <strong className="text-red-600">NON-REFUNDABLE</strong>.</p>
                  <div className="flex justify-center gap-7 mt-3">
                    <span className="flex items-center gap-1 text-yellow-900"><Phone className="w-4 h-4" /> +263786 323 131</span>
                    <span className="flex items-center gap-1 text-yellow-900"><Mail className="w-4 h-4" /> info@genfinmedical.co.zw</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;