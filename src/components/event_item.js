import React from 'react';
import PropTypes from 'prop-types';

const EventItem = ({ event, type }) => {
  return (
    <div className="event-item">
      <div className="event-desc">
        <small>{type.title}</small>
        <h2>{event.title}</h2>
        <div className="additional-info">
          <div style={{ width: '100%' }} className="event-location">
            <span
              className="glyphicon glyphicon-map-marker"
              aria-hidden="true"
              style={{ color: '#999999', top: '3px', marginRight: '3px' }}
            />
            {event.location}
          </div>
          <span className="event-date">
            {event.start_date} - {event.end_date}
          </span>
        </div>
      </div>
      <img src={event.image_url} alt={event.title} />
    </div>
  );
};

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired
};

export default EventItem;
