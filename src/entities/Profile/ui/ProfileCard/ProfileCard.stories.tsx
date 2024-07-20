import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';

const avatar =
    'https://i.pinimg.com/236x/b6/fb/66/b6fb662c518be08f012bb492174a9d47.jpg';
export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
        FeaturesFlagsDecorator({ isAppRedesigned: true }),
    ],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const PrimaryArgs = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};
export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = PrimaryArgs;
PrimaryRedesigned.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({ isAppRedesigned: true }),
];

export const withError = Template.bind({});
withError.args = { error: 'true' };

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
