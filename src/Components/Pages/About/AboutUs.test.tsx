import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './About'; // adjust relative path
import { aboutUsData } from '../../data/about'; // adjust if needed

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
          const highlight = screen.getByText(part.highlight);
          expect(highlight).toBeInTheDocument();
          expect(highlight.tagName).toBe('SPAN');
          expect(highlight).toHaveClass('text-primary');
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
