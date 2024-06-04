import { classNames } from 'shared/lib/classNames/classNames';
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
interface ProfileCardProps {
    className?: string;
    data?: Profile,
    error?: string,
    IsLoading?:boolean
    readOnly?: boolean,
    onChangeFirstName: (value?: string) =>void
    onChangeLastName: (value?: string) =>void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const { className, data, error, IsLoading, readOnly, onChangeFirstName, onChangeLastName } = props
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

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
           
            <div className={cls.data}>
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
            </div>
        </div>
    );
};
