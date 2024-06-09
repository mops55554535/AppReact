import { Article } from './article';

export interface articleDetailsShema {
    isLoading: boolean,
    error?: string,
    data?: Article
 }
