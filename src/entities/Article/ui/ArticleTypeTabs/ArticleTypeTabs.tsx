import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleType } from 'entities/Article/model/types/article';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useCallback, useMemo } from 'react';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType,
    onChangeType: (type: ArticleType) => void

}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const { className, value, onChangeType } = props;
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('ECONOMICS'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('SCIENCE'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);
    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}

        />

    );
};
