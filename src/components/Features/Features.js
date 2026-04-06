import React from 'react'

const Features = (props) => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fa fa-hospital-o"></i>
                                </div>
                                <h3>Comprehensive Cover</h3>
                                <p>Genfin provides hospital, outpatient, and specialist cover for all your healthcare needs.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <h3>Expert Medical Team</h3>
                                <p>Access a network of doctors, nurses, and healthcare professionals dedicated to your well-being.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fa fa-medkit"></i>
                                </div>
                                <h3>Medication & Pharmacy</h3>
                                <p>Get support for chronic medication, pharmacy needs, and ongoing treatment with Genfin.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fa fa-ambulance"></i>
                                </div>
                                <h3>Emergency Services</h3>
                                <p>24/7 ambulance and emergency medical response for Genfin members.</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fa fa-stethoscope"></i>
                                </div>
                                <h3>Dental & Optical</h3>
                                <p>Dental care and optical benefits for a healthy smile and clear vision.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;