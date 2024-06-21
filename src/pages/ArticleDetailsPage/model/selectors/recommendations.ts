import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlуRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticlуRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
