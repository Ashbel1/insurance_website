import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section className="contact-pg-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8">
                        <div className="section-title-s3">
                            <span>Contact us</span>
                            <h2>Drop us a line</h2>
                            <p>Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                        <div className="contact-info clearfix">
                            <div>
                                <div className="icon">
                                    <i className="ti-email"></i>
                                </div>
                                <h5>Email</h5>
                                <p>genfin@genfin.com</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-mobile"></i>
                                </div>
                                <h5>Phone</h5>
                                <p>+263 786323131</p>
                                <p>+263 774988861</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-location-arrow"></i>
                                </div>
                                <h5>Address</h5>
                                <p>Genfin Medical Aid Fund Headquarters, 123 Samora Machel Ave, Harare, Zimbabwe</p>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe title='map' src="https://www.google.com/maps?q=Genfin+Medical+Aid+Fund+Headquarters,+123+Samora+Machel+Ave,+Harare,+Zimbabwe&output=embed" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
