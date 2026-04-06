import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'}  Logo={Logo}/>
            <Hero/>
            <Features/>
            <WorkProcess/>
            <About/>
            <ServiceSection/>
            <Testimonial/>
            {/* <ProjectSection/> */}
            <FunFact/>
            <PartnerSection/>
            <ContactSection/>
            <BlogSection/>
            <Footer/> 
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;