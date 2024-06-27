import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: '1111', content: 11111 },
        { value: '2222', content: 22222 },
        { value: '3333', content: 33333 },
    ],

    value: '1111',
    defaultValue: 'ListBox',

    label: 'ListBox',

};
