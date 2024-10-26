import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';
// Замените на нужные типы

interface GetProfileArg {
    id: string | undefined;
    limit: number | undefined;
}


const PostsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserPostsById: build.query<Article[], GetProfileArg >({
            query: ({id, limit} ) => ({
                url: `/articles?userId=${id}`, 
                method: 'GET', 

                // /articles?userId=<id>
            //     params: {
            //     _limit: limit,
            //     _expand: 'user',
            // },
            } 
        ),
        }),
    }),
});

export const getUserPostsByIdInitiate = PostsApi.useGetUserPostsByIdQuery


