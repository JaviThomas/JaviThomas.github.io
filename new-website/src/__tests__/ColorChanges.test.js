import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Navbar from '../components/Navbar';

test('App component has white background', () => {
  const { container } = render(<App />);
  const webPage = container.firstChild;
  expect(webPage).toHaveStyle('background-color: rgb(255, 255, 255)');
});

test('App component has dark text color', () => {
  const { container } = render(<App />);
  const webPage = container.firstChild;
  expect(webPage).toHaveStyle('color: rgb(51, 51, 51)');
});

test('Navbar component has white background', () => {
  const { container } = render(<Navbar />);
  const navbar = container.firstChild;
  expect(navbar).toHaveStyle('background-color: rgb(255, 255, 255)');
});

test('Navbar links have dark text color', () => {
  const { container } = render(<Navbar />);
  const navbarLinks = container.querySelectorAll('a');
  navbarLinks.forEach((link) => {
    expect(link).toHaveStyle('color: rgb(31, 41, 55)');
  });
});
