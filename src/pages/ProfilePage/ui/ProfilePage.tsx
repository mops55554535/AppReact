import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { 
    ProfileCard,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfilereadOnly,
    profileActions,
    profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
    
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfilereadOnly);

    const onChangeFirstName = useCallback((value?:string) => {
        dispatch(profileActions.upadateProfile({first: value || ''}))
    }, [])
    const onChangeLastName = useCallback((value?:string) => {
            dispatch(profileActions.upadateProfile({lastname: value || ''}))
        }, [])
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfilePageHeader />
            <ProfileCard
                onChangeFirstName= {onChangeFirstName}
                onChangeLastName={onChangeLastName}
                IsLoading={isLoading} error={error} readOnly={readOnly as boolean} data={data}/>

        </DynamicModuleLoader> 
    );
};
export default ProfilePage;
