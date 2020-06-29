import React from 'react';

import './article-container.css';

import AuthorDetails from './../author-details/AuthorDetails';
import { Link } from './../../routes';

import { formatText } from './../../helpers/textFormat';

import { connect } from 'react-redux';
import { selectMessages, selectLanguage } from '../../redux/translation/translation.selectors';

import Moment from 'react-moment';

const ArticleContainer = ({ item, language, messages }) => {
	const { title, article, createdAt, englishTitle, englishArticle } = item;

	var fontClass;
	return (
	   <div className="article-container">
			<h1 className="text-center">{language === 'ES' ? title : englishTitle}</h1>
			<h5 className="text-center">
				<Moment locale={language} fromNow>{createdAt}</Moment>
			</h5>
			{
				language === 'ES' ? formatText(article.content) : formatText(englishArticle.content)
			}
			<hr/>
			<div className="row">
	     		<div className="col-lg-4 col-12">
					<AuthorDetails/>
				</div>
				<div className="col-lg-4 offset-lg-4 col-12" id="article-links">
					<div className="">
						<Link route="index">
							<a>{messages.BACK_HOME}</a>
						</Link>
						<br/>
						<Link route="blog">
							<a>{messages.BACK_BLOG}</a>
						</Link>
					</div>
				</div>
		    </div>
		</div>
	)
};

const mapStateToProps = (state) => ({
  messages: selectMessages('ARTICLE')(state),
  language: selectLanguage(state),
})

export default connect(mapStateToProps)(ArticleContainer);