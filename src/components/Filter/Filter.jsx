import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contact by name:
    <FilterInput
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </FilterLabel>
);

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};