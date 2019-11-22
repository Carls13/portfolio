import React from 'react';

import TeamItem from './../team-item/TeamItem';
import { connect } from 'react-redux';

const TeamSection = ({ team }) => (
   <div className="my-3 mx-5">
	    <h1 className="text-center"><b>Nuestro Equipo</b></h1>
	    <div className="row">
		    {
		    	team.map(member => <TeamItem key={member.name} member={member}/>)
		    }
	    </div>
   </div>
)

const mapStateToProps = ({ team }) => {
	return { team }
};

export default connect(mapStateToProps)(TeamSection);