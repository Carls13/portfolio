// import { Link } from '../routes'
import Layout from './../components/layout/Layout';
import InfoDiv from './../components/info-div/InfoDiv';
import slug from './../helpers/slug';

import { connect } from 'react-redux';

import { formatText } from './../helpers/textFormat';

class Blog extends React.Component{

	constructor(){
		super();
		}

	render(){

		const { articles } = this.props;
		let switche = false;

		return (
			<Layout title='Blog | Carlos Hernández'>		
				<h1 className="text-center mt-3"><b>Blog</b></h1>
				<p className="text-center px-3 mx-5">
					Estoy realmente interesado en temas de desarrollo, telecomunicaciones, Internet of Things, electrónica,
					música, cine, idiomas, sistemas, videojuegos, entre otros. Te invito a que me leas.
				</p>
				{
					articles.map((item, i) => {
						console.log(item)
						let firstPeriod
						switche = !switche;

						return <InfoDiv
									key={i}
									text={formatText(item.article.content.filter((item, i) => i === 0))}
									image={item.preview.fields.file.url}
									title={item.title}
									inverted={switche}
									imgSpace={3}
									textPosition='left'
									paramsToLink={{
										id: item.id,
										slug: slug(item.title)
									}}/>
					})
				}
			</Layout>)
	}
}

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Blog);