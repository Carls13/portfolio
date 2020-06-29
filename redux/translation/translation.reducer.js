import translationActionTypes from './translation.types';

const INITIAL_STATE = {
  language: 'EN'
};

const translationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case translationActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};

export default translationReducer;
