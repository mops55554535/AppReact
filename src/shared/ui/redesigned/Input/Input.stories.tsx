import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/Input',
    component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};
