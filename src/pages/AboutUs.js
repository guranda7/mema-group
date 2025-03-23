import React from "react";
import "../styles/AboutUs.css";  // Your custom styles
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-intro">
        <h1>About MEMA Group</h1>
        <p>
          MEMA Group is a trusted name in home repairs and renovation, providing top-quality services for over 10 years. We specialize in everything from wall painting to full home renovations. Our team of experts is dedicated to making your space look and feel new.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Wall Painting</h3>
            <p>We offer both interior and exterior wall painting services to refresh the look of your home.</p>
          </div>
          <div className="service-item">
            <h3>Wallpaper Installation</h3>
            <p>Our experts will help you choose the right wallpaper and install it with precision and care.</p>
          </div>
          <div className="service-item">
            <h3>Flooring</h3>
            <p>From hardwood to tile, we offer a variety of flooring options to enhance your home.</p>
          </div>
          <div className="service-item">
            <h3>Ceiling Repairs</h3>
            <p>We repair and renovate ceilings to ensure they are both functional and stylish.</p>
          </div>
          <div className="service-item">
            <h3>Interior & Exterior Wall Painting</h3>
            <p>We provide comprehensive wall painting services for both interior and exterior walls, ensuring long-lasting results.</p>
          </div>
          <div className="service-item">
            <h3>Tile Installation</h3>
            <p>Our team specializes in tile installation for kitchens, bathrooms, and other areas of your home.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose MEMA Group?</h2>
        <ul>
          <li>Over 10 years of experience in home repair services.</li>
          <li>High-quality materials and professional tools.</li>
          <li>Affordable prices and customized services for each project.</li>
          <li>Committed to customer satisfaction and reliable results.</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"MEMA Group transformed our living room with their impeccable painting services. Highly recommend!"</p>
          <span>- John D.</span>
        </div>
        <div className="testimonial">
          <p>"The wallpaper installation was perfect. The team was professional and efficient."</p>
          <span>- Sarah P.</span>
        </div>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Ready to transform your home? Contact us today for a free consultation!</p>
        <a href="/contact" className="contact-button">Contact Us</a>
      </section>
    </div>
  );
};

export default AboutUs;
