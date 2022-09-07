import { Story, Meta } from '@storybook/react';
import Button from '../button/button';
import { useTheme } from '../context/theme';
import { ThemeProvider } from './theme-provider';
import themeProviderContentStyles from './theme-provider-content.css';

export default {
  component: ThemeProvider,
  title: 'ThemeProvider',
} as Meta;

const Content = () => {
  const { theme, toggleTheme } = useTheme();
  console.log('toggle theme fnc', toggleTheme)

  return <div className={themeProviderContentStyles}><Button onClick={toggleTheme}>Toggle theme (Currently {theme})</Button></div>
}

const Template: Story = (args) => <ThemeProvider {...args}><Content /></ThemeProvider>;

export const Primary = Template.bind({});
Primary.args = {};
