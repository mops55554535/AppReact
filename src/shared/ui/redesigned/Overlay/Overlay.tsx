import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClick, children } = props;
    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
};
