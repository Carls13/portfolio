import dataActionTypes from './data.types';

const initialState = {
  articles: [],
  portfolio: [],
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case dataActionTypes.FILL_ARTICLES:
      return Object.assign({}, state, {
        articles: action.articles
      })
    case dataActionTypes.FILL_PORTFOLIO:
      return Object.assign({}, state, {
        portfolio: action.portfolio
      })
    default:
      return state
  }
};

export default dataReducer;