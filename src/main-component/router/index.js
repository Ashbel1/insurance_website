import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'

import AboutPage from '../AboutPage/AboutPage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPageS2 from '../ProjectPageS2/ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';

import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
// import BlogPage from '../BlogPage/BlogPage'
// import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
// import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
// import BlogDetails from '../BlogDetails/BlogDetails'
// import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
// import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';

import TermPage from '../Terms/TermPage';

import JoinGenFinForm from '../JoinGenFinForm';

import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="services-s2" element={<ServicePageS2 />} />
          <Route path="service-s3" element={<ServicePageS3 />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="plans_packages" element={<ProjectPage />} />
          <Route path="projects-s2" element={<ProjectPageS2 />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
         
          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="terms" element={<TermPage />} />
          <Route path="join-genfin" element={<JoinGenFinForm />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='product-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          {/* <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} /> */}
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
