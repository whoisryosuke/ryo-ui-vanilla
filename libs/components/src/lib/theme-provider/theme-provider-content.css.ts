import { style } from '@vanilla-extract/css';
import { themes, base } from '../theme';

export const themeProviderContentStyles = style({
  display: 'flex',
  backgroundColor: themes.tokens.colors.background,
  borderRadius: base.tokens.space[1],
  border: 0,
  padding: base.tokens.space[5],
});

export default themeProviderContentStyles
