import { FeatureFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlag } from './setGetFeaturesFlags';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}
export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>) {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
