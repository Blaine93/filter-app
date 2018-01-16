import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTypes, selectType } from '../actions';
import Filters from '../components/filters';
import AppliedFilters from '../components/applied_filters';

class FilterContainer extends Component {
  componentDidMount() {
    this.props.fetchTypes();
  }

  render() {
    const { types, applied_types } = this.props;

    if (Object.keys(types).length === 0 && types.constructor === Object) {
      return <div>Loading...</div>;
    }

    if (
      Object.keys(applied_types).length === 0 &&
      applied_types.constructor === Object
    ) {
      return (
        <div>
          <Filters types={types} selectType={this.props.selectType} />
        </div>
      );
    }

    return (
      <div>
        <Filters types={types} selectType={this.props.selectType} />
        <AppliedFilters
          types={types}
          applied_types={applied_types}
          fetchTypes={this.props.fetchTypes}
          selectType={this.props.selectType}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    types: state.types,
    applied_types: state.applied_types
  };
}

export default connect(mapStateToProps, { fetchTypes, selectType })(
  FilterContainer
);
