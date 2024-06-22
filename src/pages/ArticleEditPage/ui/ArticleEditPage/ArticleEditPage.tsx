import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './ArticleEditPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}
const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames('cls.ArticleEditPage', {}, [className])}>
            {isEdit
                ? `Edit page with id=${id}`
                : 'Create new article'}
        </Page>
    );
};

export default ArticleEditPage;
