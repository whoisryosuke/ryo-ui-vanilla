import { render } from '@testing-library/react';

import Link from './link';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link>Test</Link>);
    expect(baseElement).toBeTruthy();
  });
});
