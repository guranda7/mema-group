import '../styles/Services.css'
import { useTranslation } from 'react-i18next';

function Services () {
    const { t, i18n } = useTranslation();
   

    return(
        <div className="service-container">
            <div><h2>{t('services')}</h2></div>
            <div className="card-container">
            <div className="card">
                <h3>{t('cardTitle1')}</h3>
                <p>{t('cardText1')}</p>
            </div>
            <div className="card">
                <h3>{t("cardTitle2")}</h3>
                <p>{t('cardText2')}</p>
            </div>
            <div className="card">
                <h3>{t("cardTitle3")}</h3>
                <p>{t('cardText3')}</p>
            </div>
            </div>
            
        </div>
    )
}

export default Services;