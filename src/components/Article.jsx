import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, text, date }) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
