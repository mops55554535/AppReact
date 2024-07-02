import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void,
    size?: number,
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [currentStartsCount, setCurrentStartsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) { onSelect?.(starsCount); }
        setCurrentStartsCount(starsCount);
        setIsSelected(true);
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.StarIcon,
                        { [cls.isSelected]: isSelected },
                        [currentStartsCount >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
