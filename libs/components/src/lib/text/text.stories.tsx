import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
  component: Text,
  title: 'Text',
} as Meta;

const TextTemplate: Story<TextProps<'p'>> = (args) => <Text {...args} />;
const HeadingTemplate: Story<TextProps<'h1'>> = (args) => <Text {...args} />;

export const Primary = TextTemplate.bind({});
Primary.args = {
  children: `What's up party people`,
};

export const FontFamily = TextTemplate.bind({});
FontFamily.args = {
  children: `What's up party people`,
  fontFamily: 'heading',
};

export const Heading = HeadingTemplate.bind({});
Heading.args = {
  as: 'h1' as "h1",
  children: `What's up party people`,
  fontFamily: 'heading',
};
