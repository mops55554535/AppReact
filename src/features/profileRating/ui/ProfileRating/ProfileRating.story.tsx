import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfileRating from './ProfileRating';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
    <ProfileRating {...args} />
);
export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};
(Normal.decorators = [StoreDecorator({ user: { authData: { id: '1' } } })]),
    (Normal.parameters = {
        mockData: [
            {
                url: `${__API__}/profile/2`,
                method: 'GET',
                status: 200,
                response: [{ rate: 4 }],
            },
        ],
    });

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    profileId: '1',
};
WithoutRate.decorators = [StoreDecorator({})];
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];

WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/profile/2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
