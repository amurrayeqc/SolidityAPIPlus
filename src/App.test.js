// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityAPIPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityAPIPlus/i);
    expect(titleElement).toBeInTheDocument();
});
