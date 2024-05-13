import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({className} :NavbarProps ) => {
  return (
    <div className = {classNames(cls.Navbar, {}, [className])} >
    
        <div className={cls.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>Главная</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    
        </div>
       </div>
  )
}
