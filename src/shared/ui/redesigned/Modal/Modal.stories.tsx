import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
        FeaturesFlagsDecorator({ isAppRedesigned: true }),
    ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
};
