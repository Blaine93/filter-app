import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FilterItem from './filter_item';

const Filters = ({ types, selectType }) => {
  const filterItems = _.map(types, type => {
    return <FilterItem type={type} key={type.id} onTypeSelect={selectType} />;
  });

  return (
    <div className="row filter-block">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Тип события <span className="caret" />
        </button>
        <ul className="dropdown-menu" style={{ width: 344 + 'px' }}>
          {filterItems}
        </ul>
      </div>
    </div>
  );
};

Filters.propTypes = {
  types: PropTypes.object.isRequired,
  selectType: PropTypes.func.isRequired
};

export default Filters;
