import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '@headlessui/react';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Drawer = (props: DrawerProps) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
