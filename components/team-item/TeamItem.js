import React from 'react';

import './team-item.styles.css';

const TeamItem = ({ member }) => {

	const { name, role, image, description, instagram } = member;
  	const { url } = member.image.fields.file;

	return (
		   <div className="col-lg-4 col-12 px-5 text-center">
			    <img src={url} alt={name} className="member-img rounded-circle" />
				<h3><b>{name}</b></h3>
				<h6>{role}</h6>
				<p>{description}</p>
				<a href={`https://www.instagram.com/${instagram}`} target="_blank" className="instagram-link" >
					<h4>@{instagram}</h4>
				</a>
		   </div>
)}

export default TeamItem;