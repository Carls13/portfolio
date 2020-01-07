import Layout from './../components/layout/Layout';
import InfoDiv from './../components/info-div/InfoDiv';
import ArticleContainer from './../components/article-container/ArticleContainer';

import { connect } from 'react-redux';

class Article extends React.Component{

	state = {
		article: null
	}

	static async getInitialProps({ query }) {
		const { id } = query;

		return { id }
	} 

	static getDerivedStateFromProps(props, state) {
	    const { storeArticles, id } = props;

		const article = storeArticles.filter(element => element.id == id)[0];
	    
	    return { article };
  }

	
	componentDidMount(){
		const { id, storeArticles } = this.props;

		if (storeArticles) {

			const article = storeArticles.filter(element => element.id == id)[0];

			this.setState({
				article 
			});
		}
	}
			

	render(){
		const { article } = this.state;

		return(
			<Layout title={`${article ? article.title : 'Blog' } | Carlos Hernández`}>		
				{
					article && <ArticleContainer item={article}/>
				}
			</Layout>)
	}

}

const mapStateToProps = ({ articles }) => {
	return { storeArticles: articles }
}

export default connect(mapStateToProps)(Article);