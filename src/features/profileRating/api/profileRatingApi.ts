import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '../../../entities/Rating/model/types/types';

interface GetProfileArg{
    userId: string,
    profileId: string
}
interface RateProfileArg{
    userId: string,
    profileId: string
    rate: number,
    feedback?: string
}
const articleProfileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),

        rateProfile: build.mutation<void, RateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});
export const useGetProfileRating = articleProfileApi.useGetProfileRatingQuery;
export const useRateProfile = articleProfileApi.useRateProfileMutation;
