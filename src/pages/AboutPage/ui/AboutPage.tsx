import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
<<<<<<< HEAD
    const {t} = useTranslation("about") 
    return (
        <div>
           {t("О сайте")}
=======
    const { t } = useTranslation('about');

    return (
        <div>
            {t('О сайте')}
>>>>>>> 09b019a (Add tests ESlint)
        </div>
    );
};

export default AboutPage;
