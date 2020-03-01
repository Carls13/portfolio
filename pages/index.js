import Layout from './../components/layout/Layout';
import Slider from './../components/slider/slider';
import PortfolioList from './../components/portfolio-list/PortfolioList';

import { Link } from './../routes';

import { connect } from 'react-redux';
import { selectMessages } from './../redux/translation/translation.selectors'

class Index extends React.Component{

	render(){
		const { messages } = this.props;

		return (
			<Layout title='Carlos Hernández | Desarrollo y Tecnología'>	
				<Slider/>
				<h1 className="text-center mb-2">{messages.HIGHLIGHT}</h1>
				<div className="row">
					<PortfolioList short highlight/> 
				</div>
					<Link route="portfolio">
						<h3 className="text-center see-all mb-5">
							{messages.SEE_ALL}
						</h3>
					</Link>
					<h5 className="text-center">{messages.LIKED} <b>{messages.CONTACT}</b>.</h5>
			</Layout>)
	}
}

const mapStateToProps = (state) => ({
  	messages: selectMessages('HOME')(state),
})

export default connect(mapStateToProps)(Index);