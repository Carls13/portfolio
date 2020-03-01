import React from "react";

import { connect } from 'react-redux';
import { selectMessages, selectLanguage } from '../../redux/translation/translation.selectors';

import './footer.styles.css';

//Spanish images
const DESKTOP = './../static/footer-art.jpg';
const MOBILE = './../static/footer-mobile.jpg';

//English images
const DESKTOP_ENGLISH = './../static/footer-art-EN.jpg';
const MOBILE_ENGLISH = './../static/footer-mobile-EN.jpg';

function Footer({ messages, language }){
    return (
		<React.Fragment>
	        <img src="./../static/wave-footer-desktop.svg" className="top-desktop-image mt-4" alt=""/>
	        <img src="./../static/wave-footer-mobile.svg" className="top-mobile-image mt-4" alt=""/>
		   	<footer>
		         <div className="row">
					<div className="col-12 col-lg-6 p-4 mt-4">
						<img src="./../static/carlos-white.png" alt="Carlos Hernández" className="center-image footer-logo"/>	
						<h5 className="text-center">Carlos Hernández</h5>
						<h5 className="text-center">{messages.TITLE}</h5>

						<h5 className="text-center mt-3"><b>{messages.CONTACT}:</b></h5>
						<a href="tel:+584144077735"><h5 className="text-center">+58 (414) 4077735</h5></a>
						<a href="mailto:devcarlosshb98@gmail.com"><h5 className="text-center">devcarlosshb98@gmail.com</h5></a>

						<h5 className="text-center mt-3"><b>{messages.SOCIAL}:</b></h5>
						<div className="social-media">
		                  <a href="https://github.com/Carls13" target="_blank">
		                     <img src="./../../static/github.png" alt="Github"/>
		                  </a>
		                  <a href="https://www.linkedin.com/in/carlos-samuel-hern%C3%A1ndez-blanco-b35075152/" target="_blank">
		                     <img src="./../../static/linkedin.png" alt="LinkedIn"/>
		                  </a>
		                  <a href="https://www.instagram.com/carlosshb98/" target="_blank">
		                     <img src="./../../static/instagram.png" alt="Instagram" />
		                  </a>
		                  <a href="https://twitter.com/carlosshb98" target="_blank">
		                     <img src="./../../static/twitter.png" alt="Twitter" className="no-
		                  margin"/>
		                  </a>
		               </div>
					</div>
		   			<div className="col-12 col-lg-6 p-4 mt-4">
						<img src={language === 'ES' ? DESKTOP : DESKTOP_ENGLISH} alt="Carlos Hernández" className="mr-5 pr-4 mb-4 footer-desktop"/>	
						<img src={language === 'ES' ? MOBILE : MOBILE_ENGLISH} alt="Carlos Hernández" className="footer-mobile mb-5"/>	
		   			</div>
		         </div>
		   	</footer>
   	</React.Fragment>
 );
}

const mapStateToProps = (state) => ({
  messages: selectMessages('FOOTER')(state),
  language: selectLanguage(state),
})

export default connect(mapStateToProps)(Footer);