import { linkStyles } from './tag.css';
import clsx from 'clsx';
import Link, { LinkProps } from '../link/link';
import Text from '../text/text';

/* eslint-disable-next-line */
export interface TagProps extends LinkProps {
  children: React.ReactNode;
}

export function Tag({ children, ...props }: TagProps) {
  return (
    <Link {...props}>
      <Text as="span" fontFamily="heading">{children}</Text>
    </Link>
  );
}

export default Tag;
