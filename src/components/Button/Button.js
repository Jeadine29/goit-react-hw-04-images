import React from 'react';
import './Button.css';

const Button = ({ onClick }) => (
  <button type="button" className="button" onClick={onClick}>
    Load More
  </button>
);

export default Button;