import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};

export const Rowgap4 = Template.bind({});
Rowgap4.args = {
    gap: '4',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};
export const Rowgap8 = Template.bind({});
Rowgap8.args = {
    gap: '8',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};
export const Rowgap16 = Template.bind({});
Rowgap16.args = {
    gap: '16',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};
export const Rowgap32 = Template.bind({});
Rowgap32.args = {
    gap: '32',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};
export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div className="">2122</div>
            <div className="">313231</div>
            <div className="">1313</div>
        </>
    ),
};
