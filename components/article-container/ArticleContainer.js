import React from 'react';

import './article-container.css';
import AuthorDetails from './../author-details/AuthorDetails';
import { Link } from './../../routes';

import Moment from 'react-moment';

const formatText = (element) => {
	if (element) {
		switch (element.type) {
			case 'bold':
				return "font-weight-bold";
			default:
				return "font-weight-bold";
		}
	}
};

const ArticleContainer = ({ article }) => {

	const { title, content, createdAt, author } = article;

	var fontClass;
	return (
	   <div className="article-container">
			<h1 className="text-center">{title}</h1>
			<h5 className="text-center">
				<Moment locale="es" fromNow>{createdAt}</Moment>
			</h5>
			{
				content.content.map((element, i) => {
					switch (element.nodeType){
						case 'paragraph':
							fontClass = formatText(element.content[0].marks[0])
							return <p className={fontClass} key={i}>{element.content[0].value}</p>
						case 'embedded-asset-block':
							return <img key={i} src={element.data.target.fields.file.url}/>;
						default:
							fontClass = formatText(element.content[0].marks[0])
							return <p className={fontClass} key={i}>{element.content[0].value}</p>
					}
				})
			}
			<hr/>
			<div className="row">
	     		<div className="col-lg-4 col-12">
					<AuthorDetails author={author.fields}/>
				</div>
				<div className="col-lg-4 offset-lg-4 col-12 father-vertical" id="article-links">
					<div className="child-vertical">
						<Link route="index">
							Volver a Inicio
						</Link>
						<br/>
						<Link route="the-corner">
							Volver a #TheCorner
						</Link>
					</div>
				</div>
		    </div>
		</div>
	)
};

export default ArticleContainer;