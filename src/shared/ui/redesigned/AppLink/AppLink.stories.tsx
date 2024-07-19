import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    variant: 'primary',
};
Primary.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true})];

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};
Red.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true}),
    ThemeDecorator(Theme.DARK)];


export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    variant: 'red',
};
RedDark.decorators = [
    NewDesignDecorator,
    FeaturesFlagsDecorator({isAppRedesigned: true}),
    ThemeDecorator(Theme.DARK)
];
