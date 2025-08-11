import React from 'react'
import Navbar from "../Navbar/Navbar";
import Landing from '../Landing/Landing';
import PopularCars from '../PopularCars/PopularCars';
import HowItWork from '../HowItWork/HowItWork';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';



export default function Layout() {
  return (
    <>
        <Navbar />
        <Landing/>
        <PopularCars/>
        <HowItWork/>
        <WhyChooseUs/>
        <Testimonials/>
        <Footer/>

    </>
  )
}
