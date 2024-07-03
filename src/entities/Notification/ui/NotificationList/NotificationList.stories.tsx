import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { NotificationList } from './NotificationList';
import { WithoutRate } from '@/features/articleRating/ui/ArticleRating/ArticleRating.stories';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '2',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '3',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
            ],
        },
    ],
};
