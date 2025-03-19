
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';
import CustomCarousel from './components/CustomCarousel'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>
      <AboutUsSection></AboutUsSection>
      <CustomCarousel></CustomCarousel>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
