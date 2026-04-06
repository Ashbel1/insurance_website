import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'



const ContactSection = () => {

    return (
        <section className="contact-section">
            <div className="content-area">
                <div className="left-col">
                    <div className="contact-message">
                        <h4>Don’t hesitate to contact with us.  <p>+263 786323131</p>
                                                                <p>+263 774988861</p>
                        </h4>
                    </div>   
                </div>
                <div className="right-col">
                    <div className="section-title-s2">
                        
                        <h3>Have Questions about our products and services?</h3>
                    </div>
                      <div className="contact-form">
                            <ContactForm />
                        </div>
                </div>
                
            </div>
        </section>
    )

}

export default ContactSection;
