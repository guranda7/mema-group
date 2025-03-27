import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AboutUs.css";  // Your custom styles
import { Link } from "react-router-dom";

const AboutUs = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className="about-us-container">
      <section className="about-intro">
        <h1>{t('aboutPageTitle')}</h1>
        <p>
         {t('aboutPageDescription')}
        </p>
      </section>

      <section className="services">
        <h2>{t("ourServices")}</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>{t('service1')}</h3>
            <p>{t('serviceDescription1')}</p>
          </div>
          <div className="service-item">
            <h3>{t('service2')}</h3>
            <p>{t('serviceDescription2')}</p>
          </div>
          <div className="service-item">
            <h3>{t('service3')}</h3>
            <p>{t('serviceDescription3')}</p>
          </div>
          <div className="service-item">
            <h3>{t('service4')}</h3>
            <p>{t('serviceDescription4')}</p>
          </div>
          <div className="service-item">
            <h3>{t('service5')}</h3>
            <p>{t('serviceDescription5')}</p>
          </div>
          <div className="service-item">
            <h3>{t('service6')}</h3>
            <p>{t('serviceDescription6')}</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>{t('aboutQuestion')}</h2>
        <ul>
          <li>{t("answer1")}</li>
          <li>{t('answer2')}</li>
          <li>{t('answer3')}</li>
          <li>{t('answer4')}</li>
        </ul>
      </section>

      

      <section className="contact">
        <h2>{t('getInTouch')}</h2>
        <p>{t('getInTouchMessage')}</p>
        <a href="/contact" className="contact-button">Contact Us</a>
      </section>
    </div>
  );
};

export default AboutUs;
