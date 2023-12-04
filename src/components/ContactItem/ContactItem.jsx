import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem, ContactInfo, DeleteButton } from './ContactItem.styled'

export const ContactItem = ({ contact, onDelete }) => (
  <ContactListItem>
    <ContactInfo>
      {contact.name}: {contact.number}
    </ContactInfo>
    <DeleteButton type="button" onClick={() => onDelete(contact.id)}>
      Delete
    </DeleteButton>
  </ContactListItem>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};


