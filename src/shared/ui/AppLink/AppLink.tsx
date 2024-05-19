<<<<<<< HEAD
import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from "./AppLink.module.scss"

export enum AppLinkTheme { 
   PRIMARY = "primary",
   SECONDARY = "secondary"
=======
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
>>>>>>> 09b019a (Add tests ESlint)
}

interface AppLinkProps extends LinkProps {
    className?: string;
<<<<<<< HEAD
    theme?:AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => { 
  const {
      to,
      className,
      children,
      theme = AppLinkTheme.PRIMARY,
      ...otherProps} = props
  return (
    <Link to={to} className = {classNames( cls.AppLink, {}, [className, cls[theme]])} {...otherProps} >
       {children}
  </Link>
  )
}

=======
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
>>>>>>> 09b019a (Add tests ESlint)
