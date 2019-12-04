// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import PortfolioItem from './../components/portfolio-item/PortfolioItem';

import { connect } from 'react-redux';

class Portfolio extends React.Component{

	constructor(){
		super();
		}

	render(){
		const { portfolio } = this.props;

		return(
			<Layout title='Portafolio | Carlos Hernández'>	
				<h1 className="text-center mb-2">Algunos de mis trabajos realizados</h1>
				<div className="row">
					{
						portfolio.filter((element) => !element.personal)
						.map((element) => {
							return <PortfolioItem item={element} />
						})
					}
				</div>
				<h1 className="text-center mb-2">Algunos proyectos personales</h1>
				<div className="row">
					{
						portfolio.filter((element) => element.personal)
						.map((element) => {
							return <PortfolioItem item={element} />
						})
					}
				</div>
			</Layout>)
	}
}

const mapStateToProps = ({ portfolio }) => ({ portfolio });

export default connect(mapStateToProps)(Portfolio);