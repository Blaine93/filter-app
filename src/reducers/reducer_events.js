import { SELECT_TYPE, FETCH_EVENTS } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return _.mapKeys(action.payload, event => {
        return event.id;
      });
    case SELECT_TYPE:
      return state;
    default:
      return state;
  }
}
