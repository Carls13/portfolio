import React from 'react';

import './article-container.css';
import AuthorDetails from './../author-details/AuthorDetails';
import { Link } from './../../routes';

import { formatText } from './../../helpers/textFormat';

import Moment from 'react-moment';

const ArticleContainer = ({ item }) => {
	const { title, article, createdAt } = item;

	var fontClass;
	return (
	   <div className="article-container">
			<h1 className="text-center">{title}</h1>
			<h5 className="text-center">
				<Moment locale="es" fromNow>{createdAt}</Moment>
			</h5>
			{
				formatText(article.content)
			}
			<hr/>
			<div className="row">
	     		<div className="col-lg-4 col-12">
					<AuthorDetails/>
				</div>
				<div className="col-lg-4 offset-lg-4 col-12" id="article-links">
					<div className="">
						<Link route="index">
							Volver a Inicio
						</Link>
						<br/>
						<Link route="blog">
							Volver a Blog
						</Link>
					</div>
				</div>
		    </div>
		</div>
	)
};

export default ArticleContainer;