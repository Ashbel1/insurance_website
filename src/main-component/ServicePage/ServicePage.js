import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'


const ServicePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Services'} pagesub={'Services'}/> 
            <ServiceSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;

