import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CarsProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
}

export const Card = (props: CarsProps) => {
    const { t } = useTranslation();
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >

            {children}
        </div>
    );
};
