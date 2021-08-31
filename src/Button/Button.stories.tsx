// Generated with util/create-component.js
import React from "react";
import Button from "./Button";

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Button",
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  label: 'Button',
  variant: 'outline'
};

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  variant: 'text'
};