import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
// import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    return (
        <Page className={classNames('cls.AdminPanelPage', {}, ['className'])}>
            {t('AdminPanelPage')}
        </Page>
    );
};

export default AdminPanelPage;
