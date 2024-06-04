export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { Profile, ProfileShema } from './model/types/profile';
export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';
export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
export { getProfileData} from './model/selectors/getProfileData/getProfileData'
export {getProfileError } from './model/selectors/getProfileError/getProfileError'
export {getProfileIsLoading} from './model/selectors/getProfileIsLoading/getProfileIsLoading'
export {getProfilereadOnly} from './model/selectors/getProfileReadOnly/getProfileReadOnly'
 