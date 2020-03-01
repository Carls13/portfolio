import Layout from './../components/layout/Layout';
import PortfolioList from './../components/portfolio-list/PortfolioList';

import { connect } from 'react-redux';
import { selectMessages } from './../redux/translation/translation.selectors'

class Portfolio extends React.Component{

	render(){
		const { messages } = this.props;

		return (
			<Layout title='Portafolio | Carlos Hernández'>	
				<h1 className="text-center mb-2">{messages.PREVIOUS}</h1>
				<div className="row">
					<PortfolioList forPersonal={false}/>
				</div>
				<h1 className="text-center mb-2">{messages.PERSONAL}</h1>
				<div className="row">
					<PortfolioList forPersonal />
				</div>
			</Layout>)
	}
}

const mapStateToProps = (state) => ({
  messages: selectMessages('PORTFOLIO')(state),
});

export default connect(mapStateToProps)(Portfolio);