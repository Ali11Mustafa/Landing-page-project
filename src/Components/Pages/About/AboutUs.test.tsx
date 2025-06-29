import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './About'; // adjust relative path
import { aboutUsData } from '../../Data/about'; // adjust if needed
import '@testing-library/jest-dom';

describe('AboutUs component', () => {
  test('renders heading', () => {
    render(<AboutUs />);
    expect(screen.getByRole('heading', { name: aboutUsData.heading })).toBeInTheDocument();
  });

  test('renders paragraphs', () => {
    render(<AboutUs />);
    aboutUsData.paragraphs.forEach(({ parts }) => {
      parts.forEach((part) => {
        if (part.text) {
          expect(screen.getByText(part.text)).toBeInTheDocument();
        } else {
          
        }
      });
    });
  });

  test('renders buttons', () => {
    render(<AboutUs />);
    aboutUsData.buttons.forEach(({ label, link }) => {
      const button = screen.getByRole('link', { name: label });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('href', link ?? '#');
    });
  });
});