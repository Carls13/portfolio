import translationActionTypes from './translation.types'

export const changeLanguage = language => ({
  type: translationActionTypes.CHANGE_LANGUAGE,
  payload: language
})
