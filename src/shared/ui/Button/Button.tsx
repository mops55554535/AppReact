<<<<<<< HEAD
import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./Button.module.scss"
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',

=======
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
>>>>>>> 09b019a (Add tests ESlint)
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
<<<<<<< HEAD
    theme?: ThemeButton
}

export const Button = (props:ButtonProps ) => {
    const {className, 
            children,
            theme,
        ...otherProps
          

    } = props
  return (
    <button className={classNames(cls.Button, {[cls[theme]]: true}, [className])} {...otherProps}> {children} </button>
       
  )
}
=======
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
>>>>>>> 09b019a (Add tests ESlint)
