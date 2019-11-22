// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import InfoDiv from './../components/info-div/InfoDiv';
import slug from './../helpers/slug';

import { connect } from 'react-redux';

class TheCorner extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { articles } = this.props;
		let switche = false;

		return(
			<Layout title='#TheCorner | Unity Latinoamérica'>		
				<h1 className="text-center mt-3"><b>#TheCorner</b></h1>
				<p className="text-center px-5 mx-5">Somos un hub para empresarios y emprendedores que buscan soluciones comunicacionales, 
				tecnológicas o de recursos humanos. Creemos que convertir ideas en realidades es lo que mueve al mundo 
				¡Y por eso queremos servir de apoyo para que materialices la tuya!</p>
				{
					articles.map((article, i) => {
						switche = !switche;
						return <InfoDiv
									key={i}
									text={`${article.content.content[0].content[0].value} [...]`}
									image={article.preview.fields.file.url}
									title={article.title}
									inverted={switche}
									imgSpace={3}
									textPosition='left'
									paramsToLink={{
										id: article.id,
										slug: slug(article.title)
									}}/>
					})
				}
			</Layout>)
	}

}

const mapStateToProps = ({ articles }) => ({ articles });


export default connect(mapStateToProps)(TheCorner);