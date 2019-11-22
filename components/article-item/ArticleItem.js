import React from 'react';

import { Link } from './../../routes';
import slug from './../../helpers/slug';

const ArticleItem = ({ title, image, id }) => {
	return (
	<Link 
		route="article"
		params={{
			id,
			slug: slug(title)
		}}>
	    <div className="col-lg-4 col-12 px-5 text-center animation pointer">
		    <img src={image} alt={title} className="service-img" />
			<h3><b>{title}</b></h3>
	   </div>
   </Link>
)};

export default ArticleItem;