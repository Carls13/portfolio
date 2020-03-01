export const saveArticlesData = (articles) => {
  return { type: actionTypes.FILL_ARTICLES, articles }
}
export const savePortfolioData = (portfolio) => {
  return { type: actionTypes.FILL_PORTFOLIO, portfolio }
}