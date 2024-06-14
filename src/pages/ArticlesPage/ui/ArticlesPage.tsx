import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import cls from './ArticlesPage.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlePageSlices';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitalEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import { getArticlePageError, getArticlePageIsLoading, getArticlePageView } from '../model/selectors/articlesPageSelecors';
import { articleDetailsActions } from 'entities/Article/model/slice/articleDetailsSlice';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList ={
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const articles= useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const erroe = useSelector(getArticlePageError)
    const view = useSelector(getArticlePageView)
    

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitalEffect(()=>{
        dispatch(fetchArticlesList())
        dispatch(articlesPageActions.initState())
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList
                isLoading ={isLoading}
                view={view}
                articles={articles}
            />
        </div>
        </DynamicModuleLoader>
        
    );
};

export default memo(ArticlesPage);
