import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  articles: [],
  portfolio: [],
}

export const actionTypes = {
  FILL_ARTICLES: 'FILL_ARTICLES',
  FILL_PORTFOLIO: 'FILL_PORTFOLIO',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_ARTICLES:
      return Object.assign({}, state, {
        articles: action.articles
      })
    case actionTypes.FILL_PORTFOLIO:
      return Object.assign({}, state, {
        portfolio: action.portfolio
      })
    default:
      return state
  }
}

// ACTIONS
export const saveArticlesData = (articles) => {
  return { type: actionTypes.FILL_ARTICLES, articles }
}
export const savePortfolioData = (portfolio) => {
  return { type: actionTypes.FILL_PORTFOLIO, portfolio }
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
