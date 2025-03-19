import '../styles/AboutUsSection.css'
import image from '../images/grey-sofa.jpg'
import SeeMoreButton from './SeeMoreButton';

function AboutUsSection () {
    return(
        <div className="about-us-section">
            
            <div className="about-us-features">
                <div className="about-us-text">
                   <h1>About The Company</h1>
                    <p>Welcome to MEMA Group, your trusted partner in home repair, painting, wallpaper installation, flooring, and more. 
                       Since our establishment in 2019, we have been committed to transforming homes with quality craftsmanship, attention to detail, and outstanding customer service.</p>
                <SeeMoreButton></SeeMoreButton>
                </div>
                <div className="about-us-image">
                    <img className="sofa-image" src={image}></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection;