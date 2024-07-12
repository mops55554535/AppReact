import { UserRole } from '../consts/Userconsts';
import { FeatureFlags } from '@/shared/types/featuresFlags';
import { JsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
