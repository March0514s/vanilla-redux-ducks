import { store } from '../../store';
// Action Types
export const Types = {
  CHANGE_STATUS: 'CHANGE_STATUS',
};

// Reducers
const initialState = { status: '' };

export const statusReducer = (state = initialState, action) => {
  const status = action.payload;

  switch (action.type) {
    case Types.CHANGE_STATUS:
      return Object.assign({}, state, { status });
    default:
      return state;
  }
};

// Action Creators
export const changeStatus = (userName) => ({
  type: Types.CHANGE_STATUS,
  payload: `${userName} is typing`,
});
