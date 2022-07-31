import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton } from 'view/components/Skeleton/index';

const TEMPLATE_WIDTH = 400;
const TEMPLATE_HEIGHT = 150;

const Template: Story = (args) => (
  <div style={{ width: TEMPLATE_WIDTH, height: TEMPLATE_HEIGHT }}>
    <Skeleton {...args} />
  </div>
);

const settings = {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Default = Template.bind({});
Default.args = {};

// eslint-disable-next-line import/no-default-export
export default settings;
export { Default };
