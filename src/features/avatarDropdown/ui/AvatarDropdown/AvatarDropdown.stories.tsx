import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },

    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = () => <AvatarDropdown />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: '212',
            avatar: 'https://i.pinimg.com/236x/b6/fb/66/b6fb662c518be08f012bb492174a9d47.jpg',
        },
    },
})];
