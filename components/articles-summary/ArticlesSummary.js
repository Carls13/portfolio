import React from 'react';

import { useSelector } from 'react-redux';

import ArticleItem from './../article-item/ArticleItem';
import InfoDiv from './../info-div/InfoDiv';

import { formatText } from './../../helpers/textFormat';
import slug from './../../helpers/slug';

const ARTICLES_TO_SHOW = 3;

const ArticlesSummary = () => {
    let switche = false;

    const articles = useSelector(({ data }) => data.articles);
    const language = useSelector(({ translation }) => translation.language);

    return (
       <div>
        <div className="row">
            {
                articles.filter((element, i) => i < ARTICLES_TO_SHOW).map((item, i) => {
                    const previewText = language === 'ES' ? item.article : item.englishArticle;
                    const previewTitle = language === 'ES' ? item.title : item.englishTitle;
                    switche = !switche;

                    return <InfoDiv
                                key={i}
                                text={formatText(previewText.content.filter((item, i) => i === 0))}
                                image={item.preview.fields.file.url}
                                title={previewTitle}
                                inverted={switche}
                                imgSpace={3}
                                textPosition='left'
                                paramsToLink={{
                                    id: item.id,
                                    slug: slug(previewTitle)
                                }}/>
                })
            }
        </div>
       </div> 
)}

export default ArticlesSummary;