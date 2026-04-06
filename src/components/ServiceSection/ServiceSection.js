import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    // Map service icon to Font Awesome medical icon
    const getServiceIcon = (icon) => {
        switch (icon) {
            case 'flaticon-hospital':
                return 'fa fa-hospital-o';
            case 'flaticon-doctor':
                return 'fa fa-user-md';
            case 'flaticon-stethoscope':
                return 'fa fa-stethoscope';
            case 'flaticon-ambulance':
                return 'fa fa-ambulance';
            case 'flaticon-medicine':
                return 'fa fa-medkit';
            default:
                return 'fa fa-medkit';
        }
    };
    return (
        <section className="services-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>Services</span>
                            <h2>Genfin Medical Aid Fund Services</h2>
                            <p>Comprehensive healthcare solutions for individuals and families in Zimbabwe—hospital cover, outpatient care, specialist treatment, emergency services, and more.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="services-grids clearfix">
                            {Services.map((service, srv) => (
                                <div className="grid" key={srv}>
                                    <div className="icon">
                                        <i className={getServiceIcon(service.icon)}></i>
                                    </div>
                                    <h3><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;