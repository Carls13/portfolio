import React from "react";
import './footer.styles.css';

function Footer(){
    return(
		<React.Fragment>
	        <img src="./../static/bg-footer-top-desktop.svg" className="top-desktop-image mt-4" alt=""/>
	        <img src="./../static/bg-footer-top-mobile.svg" className="top-mobile-image mt-4" alt=""/>
		   	<footer>
		         <div className="row">
		   			<div className="col-12 col-lg-6 p-4 mt-4">
	   					<h3 className="text-center">SUSCRÍBETE</h3>
	   					<h6 className="text-center p-3">Para estar al tanto de nuestras novedades, suscríbete a nuestro boletín especial. 
	   					Nunca compartiremos tu información personal.</h6>
						<form 
							action="https://gmail.us4.list-manage.com/subscribe/post?u=846d5770c96378effa4b04ce7&amp;id=f6f09974d8" 
							method="post" 
							id="mc-embedded-subscribe-form" 
							name="mc-embedded-subscribe-form" 
							className="validate text-center" 
							target="_blank">
							<input type="email" name="email" id="mce-EMAIL" placeholder="Correo electrónico" className="text-center email-input d-block m-auto" required/>
					    	<input type="submit" value="Suscribirse" name="subscribe" id="mc-embedded-subscribe" className="button d-block mt-3 mx-auto"/>
						</form>
		   			</div>
					<div className="col-12 col-lg-6 p-4 mt-4">
						<img src="./../static/carlos-white.png" alt="Unity" className="center-image footer-logo"/>	
						<h5 className="text-center">Carlos Hernández</h5>
					</div>
		         </div>
		   	</footer>
   	</React.Fragment>
           
 );

}

export default Footer;