import { legacy_createStore as createStore } from 'redux';

// Action Creators
export function increment() {
   return { type: 'INCREMENT' };
}

export function decrement() {
   return { type: 'DECREMENT' };
}

// Reducer / Store
const initialState = 0;
const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case "INCREMENT":
         return state + 1;
      case "DECREMENT":
         return state - 1;
      default:
         return state;
   }
}

export const store = createStore(counterReducer);