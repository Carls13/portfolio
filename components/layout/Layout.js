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

  getContentfulData = () =>{

    const { portfolio } = this.props;

      if (portfolio.length < 1){
        this.setState({
              loading: true
        })
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

       this.setState({
          loading: false
        });
        })}
  }

  componentDidMount() {
    this.getContentfulData();
  }

	render(){

		const { children, title } = this.props
    const { loading } = this.state

		return <div>
			<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" type="image/x-icon" href="./static/carlos-logo.png" />
				<title>{title}</title>
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
    `    }}
            />
        <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet"></link>
			</Head>
  			<Header/>
  			   { loading ? <Spinner/> : children }
        <Footer/>
			<style jsx global>{`

        html, body{
          overflow-x: hidden;
        }

        body {
          margin: 0;
          font-family: 'Titillium Web';
          background-color: #ffffff;
          color: black;
        }

        a {
          color: white;
          font-weight: bold;
        }

        a:hover {
          color: white;
          text-decoration: none;
        }

        .center-image{
          display: block;
          margin: 0 auto;
        }

        /* Make clicks pass-through */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: hsl(192, 100%, 9%);

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px hsl(192, 100%, 9%), 0 0 5px hsl(192, 100%, 9%);
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: hsl(192, 100%, 9%);
          border-left-color: hsl(192, 100%, 9%);
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	}
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
  return { portfolio } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);