import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'


const preloadImages = (srcs) => {
    srcs.forEach(src => {
        const img = new window.Image();
        img.src = src;
    });
};

const Hero = () => {
    React.useEffect(() => {
        preloadImages([hero1, hero2, hero3]);
    }, []);
    return (
        <section className="hero-slider hero-style-1">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={700}
                parallax={false}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Genfin Medical Aid Fund</h2>
                            </div>
                            <div className="slide-text">
                                <p>Affordable, accessible, and quality healthcare for every Zimbabwean.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/join-genfin" className="theme-btn">Join Genfin<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Your Health, Our Priority</h2>
                            </div>
                            <div className="slide-text">
                                <p>Join Genfin and experience peace of mind with trusted medical aid cover.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Get Covered<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Zimbabwe’s Trusted Medical Aid</h2>
                            </div>
                            <div className="slide-text">
                                <p>Comprehensive cover, fast claims, and caring support—Genfin is here for you.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Contact Genfin<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero;