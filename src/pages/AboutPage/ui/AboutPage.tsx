/* eslint-disable max-len */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <Text
                text={t(
                    'Здравствуйте! сайт создан в качестве пет-проекта, README проекта находится в моём',
                )}
            />
            <a href="https://github.com/mops55554535/AppReact">
                {t('репозитории на гитхаб')}
            </a>
        </Page>
    );
};

export default AboutPage;
