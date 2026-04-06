import React from "react";
import abimg1 from '../../images/about/img-1.jpg'
import abimg2 from '../../images/about/img-2.jpg'
import abimg3 from '../../images/about/img-3.jpg'


const MissionVission = () => {
    return (
        <section className="mission-vision-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="title-area">
                            <h2>Our Mission, Vision & Strategy</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix">
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg1} alt="Genfin Mission" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>To provide affordable, accessible, and quality healthcare solutions for all Zimbabweans, ensuring peace of mind and well-being for our members.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg2} alt="Genfin Vision" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be Zimbabwe’s most trusted and innovative medical aid fund, setting the standard for excellence in healthcare coverage and member support.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg3} alt="Genfin Strategy" />
                                </div>
                                <h3>Our Strategy</h3>
                                <p>We focus on member-centric service, transparent operations, and continuous improvement—partnering with top healthcare providers and leveraging technology to deliver value and care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVission;