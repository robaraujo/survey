import surveyConfig from '../survey-data.json';

// Action Types
export const Types = {
  GET_CONFIG: 'user/GET_CONFIG',
  NEXT_PAGE: 'user/NEXT_PAGE',
  PREV_PAGE: 'user/PREV_PAGE',
  SET_ANSWER: 'user/SET_ANSWER',
  SUBMIT: 'user/SUBMIT',
};

// Reducer
const initialState = {
  config: {},
  actualPage: 0,
  answers: {},
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    case Types.NEXT_PAGE:
      return {
        ...state,
        actualPage: state.actualPage + 1,
      };
    case Types.PREV_PAGE:
      return {
        ...state,
        actualPage: state.actualPage - 1,
      };
    case Types.SET_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.name]: action.payload.value,
        },
      };
    case Types.SUBMIT:
      return {
        ...state,
        actualPage: 0,
        answers: {},
      };
    default:
      return state;
  }
}

// Action Creators

export function getConfig() {
  return (dispatch) => {
    dispatch({ type: Types.GET_CONFIG, payload: surveyConfig });
  };
}

export const nextPage = () => (dispatch) => {
  dispatch({ type: Types.NEXT_PAGE });
};

export const prevPage = () => (dispatch) => (
  dispatch({ type: Types.PREV_PAGE })
);

export const setAnswer = (name, value) => (dispatch) => (
  dispatch({ type: Types.SET_ANSWER, payload: { name, value } })
);
