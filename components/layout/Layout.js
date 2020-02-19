import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

import * as contentful from 'contentful';

import { connect } from 'react-redux';

import Header from './../header/Header';
import Footer from '../footer/Footer';
import Spinner from '../spinner/Spinner';

import 'bootstrap/dist/css/bootstrap.css'; 
import './styles.css';   

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class Layout extends React.Component{

  constructor(){
    super();
    this.state = {
      loading: false
    }
  }

  getContentfulData = () => {
    const { portfolio } = this.props;
      if (portfolio.length < 1){
        this.setState({
          loading: true
        });
        var client = contentful.createClient({
             space: 'vdc17mupsw4k',
             accessToken: 'O6Ifqs2j3UH2iji4s4o3XIXEQbChhycIDU1Sb2rc9Fo'
        })
        client.getEntries().then(entries =>{
        // Filters articles    
          const articles = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'blog';
          }).map((item)=>({
            ...item.fields,
            createdAt: item.sys.createdAt
            })
          )

          // Filters portfolio    
          const portfolio = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'portfolio';
          }).map((item)=>{
            return item.fields
          })

       this.props.fillArticles(articles);
       this.props.fillPortfolio(portfolio);

       this.setState({loading: false });
        })
      }
  }

  componentDidMount() {
    this.getContentfulData();
  }

	render(){
		const { children, title } = this.props
    const { loading } = this.state

		return (
    <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={title} />
        <link rel="manifest" href="./../../static/manifest.json" />
        <meta property="og:url" content="http://carlosshb.com" />
        <meta property="og:description" content="Jóven desarrollador web y estudiante de ingeniería. Sitio personal
                                                con portafolio, blog y contacto. ¡Visítame!"/>
        <meta property="og:image" content="./../../static/carlos-logo.png"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="theme-color" content="#850012'"/>
        <link rel="shortcut icon" type="image/x-icon" href="./static/carlos-logo.png" />
				<title>{title}</title>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156750484-1"></script>
		<script dangerouslySetInnerHTML={{
	          __html: `
	           window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-156750484-1');
		    `    }}
		            />

        <script dangerouslySetInnerHTML={{
              __html: `
                window.ChatraSetup = {
                    colors: {
                        buttonText: '#FFFFFF',
                        buttonBg: '#850012'    
                    }
                };
                (function(d, w, c) {
                  w.ChatraID = 'qKpsdyX2fKFgZyioa';
                  var s = d.createElement('script');
                  w[c] = w[c] || function() {
                      (w[c].q = w[c].q || []).push(arguments);
                  };
                  s.async = true;
                  s.src = 'https://call.chatra.io/chatra.js';
                  if (d.head) d.head.appendChild(s);
              })(document, window, 'Chatra');
    `    }}
            />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet"></link>
			</Head>
  			<Header/>
  			   { loading ? <Spinner/> : children }
        <Footer/>
		</div>
  )}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fillPortfolio: (portfolio) => dispatch({
      type: 'FILL_PORTFOLIO',
      portfolio
    }),
    fillArticles: (articles) => dispatch({
      type: 'FILL_ARTICLES',
      articles
    }),
  }
}

const mapStateToProps = ({ portfolio }) => {
  return { portfolio };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);