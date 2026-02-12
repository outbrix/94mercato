import { describe, it, expect } from 'vitest';
import { render, screen } from './test-utils';
import { Hero } from '../components/home/Hero';

describe('Hero Component', () => {
  it('renders the main headline correctly', () => {
    render(<Hero />);

    expect(screen.getByText(/Where Digital Craft/i)).toBeInTheDocument();
    expect(screen.getByText(/Becomes Timeless/i)).toBeInTheDocument();
  });

  it('displays the marketplace badge', () => {
    render(<Hero />);

    expect(screen.getByText(/Premium Digital Marketplace/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /Start Selling/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Marketplace/i })).toBeInTheDocument();
  });

  it('shows the marketplace stats', () => {
    render(<Hero />);

    expect(screen.getByText(/Curated/i)).toBeInTheDocument();
    expect(screen.getByText(/Premium Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Verified Sellers/i)).toBeInTheDocument();
  });
});
