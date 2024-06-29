import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;
export const Normal = Template.bind({});
Normal.args = {};