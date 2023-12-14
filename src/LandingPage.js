import React from 'react'
import Cards from './Components/Cards';
import ImageCarousel from './Components/ImageCarousel';
import MainFooter from './Components/MainFooter';
// import CarouselNav from './Components/CarouselNav';
import ParticleBackground from './ParticleBackground';
import ContactUs from './Components/ContactForm/ContactUs';
import SearchBar from './Components/SearchBar';


const LandingPage = () => {
  return (
    <div>
      <SearchBar/>
      <Cards />
      <ImageCarousel />
      <ImageCarousel />
      {/* <MainFooter/> */}
    </div>
  )
}

export default LandingPage