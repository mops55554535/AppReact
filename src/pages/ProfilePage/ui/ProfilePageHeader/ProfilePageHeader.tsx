import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import {  useSelector } from 'react-redux';
import { getProfilereadOnly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const {className} = props
    const readOnly = useSelector(getProfilereadOnly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() =>{
        dispatch(profileActions.setreadOnly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() =>{
        dispatch(profileActions.setreadOnly(true))
    }, [dispatch])  
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
             <Text title={t('Профиль')} />
                {readOnly ? (
                    <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
                ): (
                    <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onCancelEdit}
                >
                    {t('Отменить')}
                </Button>
                )}
                
        </div>
    );
};
