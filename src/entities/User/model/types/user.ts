import { UserRole } from '../consts/Userconsts';
import { FeatureFlags } from '@/shared/types/featuresFlags';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
