import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal]= useState(false)

    const onToggleModal = useCallback(() =>{
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR__INVERTED} className={cls.links} onClick={onToggleModal} > 
         {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>31313123131313131315412-15471-124-57814-78</Modal>
        </div>
    );
};

