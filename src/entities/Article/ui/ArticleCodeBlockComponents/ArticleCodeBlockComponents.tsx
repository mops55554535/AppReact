import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlockComponents.module.scss';

interface ArticleCodeBlockComponentsProps {
    className?: string;
}

export const ArticleCodeBlockComponents = (props: ArticleCodeBlockComponentsProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleCodeBlockComponents, {}, [className])}>
            {t('ArticleCodeBlockComponents')}
        </div>
    );
};
