import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <RatingCard title={t('feedback')} feedbackTitle={t('feedbackTitle')} hasFeedback />
        </div>
    );
};

export default MainPage;
