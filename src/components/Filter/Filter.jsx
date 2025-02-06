import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <label>Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} placeholder="Search contacts" />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
