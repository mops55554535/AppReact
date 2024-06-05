import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Select } from 'shared/ui/Select/Select';
import { CurrencyEnum } from 'entities/Curruncy/model/types/currency';
import { CurrencySelect } from 'entities/Curruncy';
import { Country } from 'shared/const/common';

interface ProfileCardProps {
    className?: string;
    data?: Profile,
    error?: string,
    IsLoading?:boolean
    readOnly?: boolean,
    onChangeFirstName?: (value?: string) =>void
    onChangeLastName?: (value?: string) =>void
    onChangeCity?: (value?: string) =>void
    onChangeAge?: (value?: string) =>void
    onChangeUserName?: (value?: string) =>void
    onChangeAvatar?: (value?: string) =>void
    onChangeCurrecy?: (currency?: CurrencyEnum) =>void
    onChangeCountry?: (country?: Country) =>void
    
    
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className,
            data,
            error,
            IsLoading,
            readOnly,
            onChangeFirstName,
            onChangeLastName,
            onChangeCity,
            onChangeAge,
            onChangeUserName,
            onChangeAvatar,
            onChangeCurrecy,
            onChangeCountry
         }= props

    if(IsLoading){
        return(
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader />
            </div>
            )
        }

    
    
    if(error){
        return(
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка")}
                    text={'обновите страницу'} 
                    align={TextAlign.CENTER} />
            </div>
        )
    }

    const mods: Mods= {
        [cls.editing]: !readOnly
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
           
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar}/>
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />
               
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                  <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUserName}
                    readOnly={readOnly}
                />
                  <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
               <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrecy}
                readOnly = {readOnly}
                />

             
              

            </div>
        </div>
    );
};
