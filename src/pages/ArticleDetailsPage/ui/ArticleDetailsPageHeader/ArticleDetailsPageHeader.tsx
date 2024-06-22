import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/index';
import { getArticleDetailsData } from 'entities/Article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details}${article?.id}/edit`);
    }, [article?.id, navigate]);
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>

            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
};