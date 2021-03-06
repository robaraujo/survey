import surveyConfig from '../survey-data.json';

// Action Types
export const Types = {
  GET_CONFIG: 'user/GET_CONFIG',
};

// Reducer
const initialState = {
  config: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * Get all emails validate from this user
 */
export function getConfig() {
  return (dispatch) => {
    dispatch({ type: Types.GET_CONFIG, payload: surveyConfig });
  };
}
