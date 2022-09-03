import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: `What's up party people`,
};

export const FontFamily = Template.bind({});
FontFamily.args = {
  children: `What's up party people`,
  fontFamily: "heading",
};
