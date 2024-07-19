import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
};
Primary.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true}),
];
export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
};
Small.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true}),
];