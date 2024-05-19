import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
<<<<<<< HEAD
    const {t} = useTranslation() 
    return (
        <div>
            {t("Главная страница")}
=======
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
>>>>>>> 09b019a (Add tests ESlint)
        </div>
    );
};

export default MainPage;
