import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="contact-item">
      {name}: {number}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
