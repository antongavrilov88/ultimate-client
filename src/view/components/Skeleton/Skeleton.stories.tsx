import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton } from 'view/components/Skeleton/index';

const Template: Story = (args) => {
  return (
    <div style={{ width: 400, height: 150 }}>
      <Skeleton {...args} />
    </div>
  );
};

const settings = {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Default = Template.bind({});
Default.args = {};

export default settings;
export { Default };
