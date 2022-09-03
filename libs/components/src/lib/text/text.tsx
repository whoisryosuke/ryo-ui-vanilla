import { textStyles } from './text.css';
import clsx from 'clsx';
import { fontSizeUtilityStyles, FontSizeUtilityStyles } from '../utility-styles/fontSizes.css';

/* eslint-disable-next-line */
export interface TextProps {
  children: React.ReactNode;
  fontSize?: FontSizeUtilityStyles['fontSize'];
  fontFamily?: FontSizeUtilityStyles['fontFamily'];
  lineHeight?: FontSizeUtilityStyles['lineHeight'];
}

export function Text({ children, fontSize = 1,
fontFamily = 'body',
lineHeight = 1 }: TextProps) {
  const fontProps = {
     fontSize,
      fontFamily,
      lineHeight
  }
  return (
    <p className={clsx(textStyles, fontSizeUtilityStyles(fontProps))}>
      {children}
    </p>
  );
}

export default Text;
