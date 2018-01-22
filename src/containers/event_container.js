import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions';
import EventItem from '../components/event_item';
import _ from 'lodash';
import PropTypes from 'prop-types';

class EventContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  getTypeTitle(id) {
    return _.find(this.props.types, type => {
      return type.id === id;
    });
  }

  renderEvents() {
    const { events, applied_types } = this.props;

    if (events.length === 0) {
      return <div>Loading...</div>;
    }

    return _.map(events, event => {
      if (
        Object.keys(applied_types).length !== 0 &&
        applied_types.constructor === Object
      ) {
        const match = _.find(applied_types, type => {
          return type.id === event.type;
        });
        if (typeof match !== 'undefined') {
          return (
            <EventItem
              event={event}
              type={this.getTypeTitle(event.type)}
              key={event.id}
            />
          );
        }
      } else {
        return (
          <EventItem
            event={event}
            type={this.getTypeTitle(event.type)}
            key={event.id}
          />
        );
      }
    });
  }

  render() {
    return <div className="row events">{this.renderEvents()}</div>;
  }
}

EventContainer.propTypes = {
  types: PropTypes.object.isRequired,
  applied_types: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func
};

function mapStateToProps(state) {
  return {
    events: state.events,
    applied_types: state.applied_types,
    types: state.types
  };
}

export default connect(mapStateToProps, { fetchEvents })(EventContainer);
