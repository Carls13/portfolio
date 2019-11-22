import React from 'react';

import { connect } from 'react-redux';
import ServicePreview from './../service-preview/ServicePreview';

const ServicesSection = ({ services }) => (
   <div className="my-3 mx-5" id="services">
	    <h1 className="text-center"><b>Nuestros Servicios</b></h1>
	    <div className="row">
		    {
		    	services.map(service => <ServicePreview key={service.title} service={service}/>)
		    }
	    </div>
   </div>
)

const mapStateToProps = ({ services }) => {
	return { services }
};

export default connect(mapStateToProps)(ServicesSection);