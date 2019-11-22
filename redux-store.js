import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  articles: [],
  team: [],
  services: [],
}

export const actionTypes = {
  FILL_ARTICLES: 'FILL_ARTICLES',
  FILL_TEAM: 'FILL_TEAM',
  FILL_SERVICES: 'FILL_SERVICES',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_ARTICLES:
      return Object.assign({}, state, {
        articles: action.articles
      })
    case actionTypes.FILL_TEAM:
      return Object.assign({}, state, {
        team: action.team
      })
    case actionTypes.FILL_SERVICES:
      return Object.assign({}, state, {
        services: action.services
      })
    default:
      return state
  }
}

// ACTIONS
export const saveArticlesData = (articles) => {
  return { type: actionTypes.FILL_ARTICLES, articles }
}
export const saveTeamData = (team) => {
  return { type: actionTypes.FILL_TEAM, team }
}
export const saveServicesData = (services) => {
  return { type: actionTypes.FILL_SERVICES, services }
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
