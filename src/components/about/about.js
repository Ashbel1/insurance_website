import React from 'react'
import abimg from '../../images/about-2.jpg'
import VideoModal from '../ModalVideo/VideoModal'


const About = (props) => {
    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 order-lg-1 order-2 col-12">
                        <div className="img-holder">
                            <img src={abimg} alt="Genfin Medical Aid Fund" />
                            <div className="experience-text">
                                Over 10 Years of <span>Trusted Healthcare</span>
                            </div>
                            <VideoModal />
                        </div>
                    </div>
                    <div className="col col-lg-6 order-lg-2 order-1 col-12">
                        <div className="section-title-s2">
                            <span>About Genfin Medical Aid Fund</span>
                            <h2>Affordable, Accessible, Quality Healthcare for Zimbabwe</h2>
                        </div>
                        <div className="about-content">
                            <h4>Genfin Medical Aid Fund is dedicated to providing comprehensive, affordable, and accessible healthcare solutions to individuals and families across Zimbabwe.</h4>
                            <p>Founded with a vision to make quality healthcare a reality for all, Genfin offers a range of medical aid packages tailored to meet the needs of our diverse members. Our commitment is to ensure peace of mind through reliable cover, fast claims processing, and a caring support team. Join Genfin and experience healthcare you can trust, every day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;