import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// import cls from './ArticleCodeBlockComponents.module.scss';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentsProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentsProps) => {
    const { t } = useTranslation();
    const { className, block } = props;
    return (
        <div className={classNames('cls.ArticleCodeBlockComponents', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
