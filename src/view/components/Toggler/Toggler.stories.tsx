import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggler } from '.';

export default {
  title: 'Example/Toggler',
  component: Toggler,
} as ComponentMeta<typeof Toggler>;

const Template: ComponentStory<typeof Toggler> = (args) => <Toggler {...args} />;

export const TogglerStory = Template.bind({});
TogglerStory.args = {};
