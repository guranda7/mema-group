
import HeroSection from '../components/HeroSection.js';
import Services from '../components/Services.js';
import AboutUsSection from '../components/AboutUsSection.js';
import CustomCarousel from '../components/CustomCarousel.js'


function Home () {
    return(
      <div className="App">
      <HeroSection></HeroSection>
      <Services></Services>
      <AboutUsSection></AboutUsSection>
      <CustomCarousel></CustomCarousel>
 
    </div>
    )

}

export default Home;