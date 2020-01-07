import Layout from './../components/layout/Layout';
import Slider from './../components/slider/slider';
import PortfolioItem from './../components/portfolio-item/PortfolioItem';

import { Link } from './../routes';

import { connect } from 'react-redux';

class Index extends React.Component{

	constructor(){
		super();
		}

	render(){
		const { portfolio } = this.props;

		return(
			<Layout title='Carlos Hernández | Desarrollo y Tecnología'>	
				<Slider/>
				<h1 className="text-center mb-2">Últimos proyectos agregados</h1>
				<div className="row">
					{
						portfolio.filter((element) => !element.personal)
						.filter((element, i) => i < 3)
						.map((element) => {
							return <PortfolioItem item={element} />
						})
					}
				</div>
					<Link route="portfolio">
						<h3 className="text-center see-all mb-5">
							Velos todos aquí
						</h3>
					</Link>
					<h5 className="text-center">¿Te gustaron y necesitas desarrollar tu sitio web? <b>No dudes en contactarme.</b></h5>
			</Layout>)
	}
}


const mapStateToProps = ({ portfolio }) => ({ portfolio });

export default connect(mapStateToProps)(Index);