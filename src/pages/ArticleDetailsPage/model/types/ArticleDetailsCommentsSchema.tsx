import { EntityState } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;

}
