import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}

interface CarsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
    theme?: CardTheme
}

export const Card = (props: CarsProps) => {
    const { t } = useTranslation();
    const {
        className, children, theme = CardTheme.NORMAL, ...otherProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >

            {children}
        </div>
    );
};
