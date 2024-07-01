import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
    decorators: [
        (Story) => <div style={{ padding: 100 }} className=""><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const topLeft = Template.bind({});
topLeft.args = {};
