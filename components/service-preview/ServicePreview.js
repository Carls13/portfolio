import React from 'react';
import { Link } from './../../routes';

import slug from './../../helpers/slug';

import './service-preview.styles.css';

const ServicePreview = ({ service }) => {

	const { title, id } = service;
  	const { url } = service.image.fields.file;

	return (
			<Link 
				route="service"
				params={{
					id,
					slug: slug(title)
				}}>
			   <div className="col-lg-4 col-12 px-5 text-center animation pointer">
				    <img src={url} alt={name} className="service-img rounded-circle" />
					<h3><b>{title}</b></h3>
			   </div>
			</Link>
)}

export default ServicePreview;