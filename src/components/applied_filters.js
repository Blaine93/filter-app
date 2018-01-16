import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import AppliedFilterItem from './applied_filter_item';

const AppliedFilters = ({ types, applied_types, fetchTypes, selectType }) => {
  const appliedFilterItems = _.map(applied_types, type => {
    return (
      <AppliedFilterItem type={type} key={type.id} onTypeSelect={selectType} />
    );
  });

  return (
    <div className="row applied-filter-block">
      <div className="applied-filters-items">{appliedFilterItems}</div>
      <div className="clear-filters">
        <button className="btn btn-link" onClick={() => fetchTypes()}>
          Очистить
        </button>
      </div>
    </div>
  );
};

AppliedFilters.propTypes = {
  types: PropTypes.object.isRequired,
  applied_types: PropTypes.object.isRequired,
  fetchTypes: PropTypes.func.isRequired,
  selectType: PropTypes.func.isRequired
};

export default AppliedFilters;
