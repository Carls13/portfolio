import React from 'react';

import { connect } from 'react-redux';

import ArticleItem from './../article-item/ArticleItem';

const ARTICLES_TO_SHOW = 3;

const ArticlesSummary = ({ articles }) => (
   <div>
    <h1 className="text-center">¡Últimos artículos!</h1>
    <div className="row">
    	{
    		articles.filter((element, i) => i < ARTICLES_TO_SHOW).map((article, i) => {
    			return <ArticleItem key={i} title={article.title} image={article.preview.fields.file.url} id={article.id}/>
    		})
    	}
    </div>
   </div> 
)

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(ArticlesSummary);