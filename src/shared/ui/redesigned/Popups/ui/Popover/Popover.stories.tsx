import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './Popover';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/Popover',
    component: Popover,
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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const topLeft = Template.bind({});
topLeft.args = {
    trigger: 'Popover',
    children: (
        <>
            <div>option1</div>
            <div>option2</div>
            <div>option3</div>
        </>
    ),
};
