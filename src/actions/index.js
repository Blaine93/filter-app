import { typeToTitle, events } from '../data';
import { FETCH_TYPES, SELECT_TYPE, FETCH_EVENTS } from './types';

export function fetchTypes() {
  return {
    type: FETCH_TYPES,
    payload: typeToTitle
  };
}

export function selectType(type) {
  return {
    type: SELECT_TYPE,
    payload: type
  };
}

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
    payload: events
  };
}
