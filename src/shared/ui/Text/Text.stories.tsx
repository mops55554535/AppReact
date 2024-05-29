import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { title } from 'process';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'lorem ipsum',
    text: 'lorem ipsum Descripton Descripton Descripton Descripton Descripton Descripton',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {

    text: 'Descripton Descripton Descripton Descripton Descripton Descripton',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'lorem ipsum',
    text: 'Descripton Descripton Descripton Descripton Descripton Descripton',
    Theme: TextTheme.ERROR,
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
