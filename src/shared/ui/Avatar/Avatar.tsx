import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
    className?: string;
    src?: string
    size?: number
    alt?: string
}

export const Avatar = (props: AvatarProps) => {


    const {className, src, size, alt} = props
    const mods:Mods  ={}

    const styles = useMemo<CSSProperties>(() =>({
        width: size || 100,
        height: size || 100
    }), [size])
    return (
        <img
            alt={alt}
            src={src} 
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}>
            
        </img>
    );
};
