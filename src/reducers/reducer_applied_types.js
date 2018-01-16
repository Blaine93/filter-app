import { FETCH_TYPES, SELECT_TYPE } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TYPES:
      return {};
    case SELECT_TYPE:
      const type = action.payload;

      if (typeof type.selected === 'undefined' || type.selected === true) {
        return _.omit(state, type.id);
      } else {
        return {
          ...state,
          [type.id]: {
            id: type.id,
            title: type.title
          }
        };
      }
    default:
      return state;
  }
}
