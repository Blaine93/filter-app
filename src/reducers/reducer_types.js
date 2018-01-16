import { FETCH_TYPES, SELECT_TYPE } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TYPES:
      const types = _.map(action.payload, (value, key) => {
        return {
          id: key,
          title: value,
          selected: false
        };
      });
      return _.mapKeys(types, type => {
        return type.id;
      });
    case SELECT_TYPE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          selected: !_.find(state, type => {
            return type.id === action.payload.id;
          }).selected
        }
      };
    default:
      return state;
  }
}
