import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import App from './App';

test('Check Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
