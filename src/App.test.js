import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reddit Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reddit/i);
  expect(linkElement).toBeInTheDocument();
});
