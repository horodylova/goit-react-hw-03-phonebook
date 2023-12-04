import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormContainer, Label, Input, Button } from './ContactForm.styled';


export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();
    addContact({ id, name, number });

    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Label htmlFor="name">
        Name:
        <Input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Label>
      <Label htmlFor="number">
        Number:
        <Input type="tel" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};


