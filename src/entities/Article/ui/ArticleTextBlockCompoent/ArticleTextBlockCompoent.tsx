import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockCompoent.module.scss';

interface ArticleTextBlockCompoentProps {
    className?: string;
}

export const ArticleTextBlockCompoent = (props: ArticleTextBlockCompoentProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <div className={classNames(cls.ArticleTextBlockCompoent, {}, [className])}>
            {t('ArticleTextBlockCompoent')}
        </div>
    );
};
