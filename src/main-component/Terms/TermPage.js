import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Testimonial2 from '../../components/Testimonial2/TermsContent';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png'

const TermPage = (props) => {

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Terms and Conditions'} pagesub={'Terms and Conditions'} />
            <Testimonial2 />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
