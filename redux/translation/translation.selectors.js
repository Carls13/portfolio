import { createSelector } from 'reselect'

import { EN_MESSAGES as englishMessages } from './messages/EN'
import { ES_MESSAGES as spanishMessages } from './messages/ES'

export const selectLanguage = state => state.translation.language;

export const selectMessages = componentName =>
  createSelector(
    [selectLanguage],
    language => {
      switch (language) {
        case 'EN':
          return englishMessages[componentName]
        case 'ES':
          return spanishMessages[componentName]
        default:
          return englishMessages[componentName]
      }
    }
  );

  export const selectSkillsMessages = () =>
  createSelector(
    [selectLanguage],
    language => {
      switch (language) {
        case 'EN':
          return englishMessages['ABOUT']['SKILLS_DATA'];
        case 'ES':
          return spanishMessages['ABOUT']['SKILLS_DATA'];
        default:
          return englishMessages['ABOUT']['SKILLS_DATA'];
      }
    }
  );