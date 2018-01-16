import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ type, onTypeSelect }) => {
  const selectedIcon = (
    <span className="glyphicon glyphicon-ok" aria-hidden="true" />
  );

  return (
    <li onClick={() => onTypeSelect(type)}>
      {type.title}
      {type.selected ? selectedIcon : ''}
    </li>
  );
};

FilterItem.propTypes = {
  type: PropTypes.object.isRequired,
  onTypeSelect: PropTypes.func.isRequired
};

export default FilterItem;
