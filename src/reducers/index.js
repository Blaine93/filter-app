import { combineReducers } from 'redux';
import TypesReducer from './reducer_types';
import AppliedTypesReducer from './reducer_applied_types';
import EventsReducer from './reducer_events';

const rootReducer = combineReducers({
  types: TypesReducer,
  applied_types: AppliedTypesReducer,
  events: EventsReducer
});

export default rootReducer;
