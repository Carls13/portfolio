// import { Link } from '../routes'
import Layout from './../components/layout/Layout';

class Index extends React.Component{

	constructor(){
		super();
		}

	render(){

		return(
			<Layout title='Carlos Hernández | Desarrollo y Tecnología'>	
				<script dangerouslySetInnerHTML={{
	            __html: `
	  <!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5dd72165d96992700fc8a41e/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->
	  `
	          }}
	          />
				
			</Layout>)
	}

}

export default Index;