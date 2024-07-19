import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SvgIcon from '../../../assets/icons/copy.svg'
import { Icon } from './Icon';
import { NewDesignDecorator } from '@/shared/config/storybook/newDesignDecorator/newDesignDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

export default {
    title: 'shared/redesigned/Icon',
    component: Icon,
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
        FeaturesFlagsDecorator({isAppRedesigned: true}),
    ]
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    Svg: SvgIcon,
    width: 30,
    height: 30,
    clickable: true
};
