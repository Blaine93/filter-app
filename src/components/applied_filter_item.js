import React from 'react';
import PropTypes from 'prop-types';

const AppliedFilterItem = ({ type, onTypeSelect }) => {
  return (
    <div className="applied-filter">
      {type.title}
      <button className="btn btn-default" onClick={() => onTypeSelect(type)}>
        <span
          className="glyphicon glyphicon-remove"
          aria-hidden="true"
          style={{ color: '#999999' }}
        />
      </button>
    </div>
  );
};

AppliedFilterItem.propTypes = {
  type: PropTypes.object.isRequired,
  onTypeSelect: PropTypes.func.isRequired
};

export default AppliedFilterItem;
