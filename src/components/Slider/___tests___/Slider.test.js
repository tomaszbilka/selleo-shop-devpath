import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from '../Slider';

describe('slider tests', () => {
  test('should change to second slide after right arrow click', () => {
    render(<Slider />);
    const startingText = screen.getByRole('heading', {
      name: /creative sofa/i,
    });
    expect(startingText).toBeInTheDocument;
    const rightBtn = screen.getByText('>');
    userEvent.click(rightBtn);
    const secondText = screen.getByRole('heading', { name: /flexible chair/i });
    expect(secondText).toBeInTheDocument;
  });

  test('should back to first slide after last one', () => {
    render(<Slider />);
    const rightBtn = screen.getByText('>');
    userEvent.click(rightBtn);
    userEvent.click(rightBtn);
    userEvent.click(rightBtn);
    const startingText = screen.getByRole('heading', {
      name: /creative sofa/i,
    });
    expect(startingText).toBeInTheDocument;
  });

  test('should render last slide after click left arrow', () => {
    render(<Slider />);
    const leftBtn = screen.getByText('<');
    userEvent.click(leftBtn);
    const lastSlideText = screen.getByRole('heading', { name: /best places/i });
    expect(lastSlideText).toBeInTheDocument;
  });

  test('should each dot display correspondent slide and have active class', () => {
    render(<Slider />);
    const firstDot = screen.getByTestId('0');
    const secondDot = screen.getByTestId('1');
    const thirdDot = screen.getByTestId('2');
    userEvent.click(secondDot);
    const secondText = screen.getByRole('heading', { name: /flexible chair/i });
    expect(secondText).toBeInTheDocument;
    expect(secondDot.getAttribute('class')).toContain('dot--active');
    userEvent.click(thirdDot);
    const thirdText = screen.getByRole('heading', { name: /best places/i });
    expect(thirdText).toBeInTheDocument;
    expect(thirdDot.getAttribute('class')).toContain('dot--active');
    userEvent.click(firstDot);
    const firstText = screen.getByRole('heading', { name: /creative sofa/i });
    expect(firstText).toBeInTheDocument;
    expect(firstDot.getAttribute('class')).toContain('dot--active');
  });
});
