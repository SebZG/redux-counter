import { legacy_createStore as createStore } from 'redux';

// Action Creators
export const increment = () => {
   return { type: 'increment' }
}

export const decrement = () => {
   return { type: 'decrement' }
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'increment':
         return state + 1;
      case 'decrement':
         return state - 1;
      default:
         return state;
   }
};

export const store = createStore(countReducer);