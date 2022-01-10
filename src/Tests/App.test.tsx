import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroesApp from '../Components/HeroesApp';

describe('Tests on <App /> Component', () => {
  test('renders learn react link', () => {
    render(<HeroesApp />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
