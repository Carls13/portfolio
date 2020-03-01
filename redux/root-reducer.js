import { combineReducers } from 'redux'

import translationReducer from './translation/translation.reducer';
import dataReducer from './data/data.reducer';

const rootReducer = combineReducers({
  translation: translationReducer,
  data: dataReducer
})

export default rootReducer;
