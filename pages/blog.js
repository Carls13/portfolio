import Layout from './../components/layout/Layout';

import { connect } from 'react-redux';
import { selectMessages } from './../redux/translation/translation.selectors'


import ArticlesSummary from './../components/articles-summary/ArticlesSummary';

class Blog extends React.Component{

	render(){
		const { messages } = this.props;
		let switche = false;

		return (
			<Layout title='Blog | Carlos Hernández'>		
				<h1 className="text-center mt-3"><b>Blog</b></h1>
				<p className="text-center px-3 mx-5">
					{messages.DESCRIPTION}
				</p>
        		<h1 className="text-center">{messages.LATEST}</h1>
				<ArticlesSummary/>
			</Layout>)
	}
}

const mapStateToProps = (state) => ({
  messages: selectMessages('BLOG')(state),
})

export default connect(mapStateToProps)(Blog);