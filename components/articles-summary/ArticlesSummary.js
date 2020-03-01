import React from 'react';

import { connect } from 'react-redux';

import ArticleItem from './../article-item/ArticleItem';
import InfoDiv from './../info-div/InfoDiv';

import { formatText } from './../../helpers/textFormat';
import slug from './../../helpers/slug';

const ARTICLES_TO_SHOW = 3;

const ArticlesSummary = ({ articles }) => {
    let switche = false;
    return (
       <div>
        <div className="row">
            {
                articles.filter((element, i) => i < ARTICLES_TO_SHOW).map((item, i) => {
                    switche = !switche;

                    return <InfoDiv
                                key={i}
                                text={formatText(item.article.content.filter((item, i) => i === 0))}
                                image={item.preview.fields.file.url}
                                title={item.title}
                                inverted={switche}
                                imgSpace={3}
                                textPosition='left'
                                paramsToLink={{
                                    id: item.id,
                                    slug: slug(item.title)
                                }}/>
                })
            }
        </div>
       </div> 
)}

const mapStateToProps = ({ data: { articles } }) => ({ articles });

export default connect(mapStateToProps)(ArticlesSummary);