import surveyConfig from '../survey-data.json';

// Action Types
export const Types = {
  GET_CONFIG: 'survey/GET_CONFIG',
  NEXT_PAGE: 'survey/NEXT_PAGE',
  PREV_PAGE: 'survey/PREV_PAGE',
  SET_ANSWER: 'survey/SET_ANSWER',
  SUBMIT_SUCCESS: 'survey/SUBMIT_SUCCESS',
  CLOSE: 'survey/CLOSE',
};

// Reducer
const initialState = {
  config: {},
  actualPage: 0,
  answers: {},
  closed: false,
  submitted: false,
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
    case Types.SUBMIT_SUCCESS:
      return {
        ...state,
        submitted: true,
      };
    case Types.CLOSE:
      return {
        ...state,
        closed: true,
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

// fake request time
export const submit = () => (dispatch) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      dispatch({ type: Types.SUBMIT_SUCCESS });
    }, 2000);
  })
);

export const close = () => (dispatch) => {
  dispatch({ type: Types.CLOSE });
};
