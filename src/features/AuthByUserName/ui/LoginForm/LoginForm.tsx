import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
          <input type="text" className={cls.input}/>
          <input type="text" className={cls.input}/>
          <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
