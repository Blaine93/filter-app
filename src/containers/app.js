import React, { Component } from 'react';
import FilterContainer from './filter_container';
import EventContainer from './event_container';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <FilterContainer />
        <EventContainer />
      </div>
    );
  }
}
