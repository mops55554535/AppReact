import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }} className="">
                <Story />
            </div>
        ),
        NewDesignDecorator,
        FeaturesFlagsDecorator({ isAppRedesigned: true }),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const topLeft = Template.bind({});

topLeft.args = {
    direction: 'top left',
    value: '1111',
    items: [
        { value: '1111', content: 11111 },
        { value: '2222', content: 22222 },
        { value: '3333', content: 33333 },
    ],
};

export const topRight = Template.bind({});

topRight.args = {
    direction: 'top right',
    value: '1111',
    items: [
        { value: '1111', content: 11111 },
        { value: '2222', content: 22222 },
        { value: '3333', content: 33333 },
    ],
};
export const bottomLeft = Template.bind({});

bottomLeft.args = {
    direction: 'bottom left',
    value: '1111',
    items: [
        { value: '1111', content: 11111 },
        { value: '2222', content: 22222 },
        { value: '3333', content: 33333 },
    ],
};

export const bottomRight = Template.bind({});

bottomRight.args = {
    direction: 'bottom right',
    value: '1111',
    items: [
        { value: '1111', content: 11111 },
        { value: '2222', content: 22222 },
        { value: '3333', content: 33333 },
    ],
};
