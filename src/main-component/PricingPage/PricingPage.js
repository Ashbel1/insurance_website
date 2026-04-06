import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing'
import Logo from '../../images/logo.png'
import Footer from '../../components/Footer/Footer';


const PricingPage =() => {
    return(
        <Fragment>
            <Navbar3 Logo={Logo}/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <Pricing/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;
