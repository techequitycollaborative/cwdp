import { render, screen } from '@testing-library/react';

import { landingSectionCopy } from 'assets';

import App from './App';

test('renders basic landing section', () => {
  render(<App />);
  const linkElement = screen.getByText(landingSectionCopy.header);
  expect(linkElement).toBeInTheDocument();
});
