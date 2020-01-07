import React from "react";
import './footer.styles.css';

function Footer(){
    return(
		<React.Fragment>
	        <img src="./../static/wave-footer-desktop.svg" className="top-desktop-image mt-4" alt=""/>
	        <img src="./../static/wave-footer-mobile.svg" className="top-mobile-image mt-4" alt=""/>
		   	<footer>
		         <div className="row">
					<div className="col-12 col-lg-6 p-4 mt-4">
						<img src="./../static/carlos-white.png" alt="Carlos Hernández" className="center-image footer-logo"/>	
						<h5 className="text-center">Carlos Hernández</h5>
						<h5 className="text-center">Desarrollador Web y Estudiante de Ingeniería</h5>

						<h5 className="text-center mt-3"><b>Contacto:</b></h5>
						<a href="tel:+584144077735"><h5 className="text-center">+58 (414) 4077735</h5></a>
						<a href="mailto:devcarlosshb98@gmail.com"><h5 className="text-center">devcarlosshb98@gmail.com</h5></a>

						<h5 className="text-center mt-3"><b>Mis redes sociales:</b></h5>
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
						<img src="./../static/footer-art.jpg" alt="Carlos Hernández" className="mr-5 pr-4 mb-4 footer-desktop"/>	
						<img src="./../static/footer-mobile.jpg" alt="Carlos Hernández" className="footer-mobile mb-5"/>	
		   			</div>
		         </div>
		   	</footer>
   	</React.Fragment>
 );
}

export default Footer;