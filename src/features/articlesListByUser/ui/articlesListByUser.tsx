import React from 'react';
import { useTranslation } from 'react-i18next';
import { Article } from '@/entities/Article';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticlesListByUserProps {

    className?: string;

    article: Article;

}


export const ArticlesListByUser = (props: ArticlesListByUserProps) => {
    const { className, article } = props;   
    const { t } = useTranslation();

    return (

            <li>
                    {/* <VStack key={article.id} className='stackCard'> */}

                        <Card  padding='8'>
                            <Text text={article.title} />
                        </Card>

                    {/* </VStack> */}
                    
            </li>
    );

}