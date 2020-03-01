import React from 'react';

import './author-details.css';

import { connect } from 'react-redux';
import { selectMessages } from '../../redux/translation/translation.selectors';

const AuthorDetails = ({ messages }) => (
	<div className="row text-center author-div">
		<div className="col-5"> 
			<img src="./../../static/myself.jpg" alt="Carlos Hernández" className="d-block m-auto author rounded-circle"/>
		</div>
		<div className="col-7 py-3">
			<h3><b>Carlos Hernández</b></h3>
			<h6>{messages.DEVELOPER}</h6>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
  messages: selectMessages('AUTHOR')(state)
})

export default connect(mapStateToProps)(AuthorDetails);