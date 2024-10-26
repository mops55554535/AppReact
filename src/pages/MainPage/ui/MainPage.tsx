import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserPostsByIdInitiate,  } from '@/entities/User';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';
import { ArticlesListByUser } from '@/features/articlesListByUser';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const auth = useSelector(getUserAuthData);


    
    const articles = getUserPostsByIdInitiate({
        id: auth?.id ?? '',
        limit: 3
    });

    const userName = auth?.username;
    const userRoles = auth?.roles;
    const articleCount = articles?.data?.length ?? 0
    if (!userName || !userRoles) {
        return ( 
        <>
        <h3 >{t('Главная страница')}</h3>
        <h4>{t('Вы можете войти как Admin, логин admin пароль - 123, или как User, логин user пароль - 123')}</h4>
        </>
    )
    }

    return (

        <div className="main-page" data-testid="MainPage" >
            <h3>{t('Главная страница')}</h3>
            <p>{t(`Вы вошли в профиль - ${userName}, роль на сайте - ${userRoles}`)}</p>
            <p>
                {t(`Всего публикаций: ${articleCount}`)}
                {articleCount <= 0 ? <span>{t('\nНапишите свою первую статью!')}</span> : null}
            </p>
            {articleCount > 0 && (
                <Flex align="center"  direction='row' 
                // direction={direction}
                // gap="8"
                // align="start"
                // className={classNames(cls.Tabs, {}, [className])}
                // eslint-disable-next-line i18next/no-literal-string
                wrap="wrap"
                gap="16"
                >
                <p>{t(`Ваши публикации:`)}</p>
                <VStack  style={{ display: "contents"} }
                gap="16"
                // eslint-disable-next-line i18next/no-literal-string
                wrap='wrap' 
                 
               >
                 <Flex direction='column' align='start' style={{ display: "contents" }} >
                        {articles?.data?.map(article => (
                           <ArticlesListByUser article={article} />
                    ))}
                </Flex>
                </VStack>
                </Flex    >)
            }
        </div>
    );
};

export default MainPage;
