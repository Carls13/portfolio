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

    const { team } = this.props;

      if (team.length < 1){
        this.setState({
              loading: true
        })
        var client = contentful.createClient({
             space: '3yzg5epvoojr',
             accessToken: 'phneLEC82rdUJPAuUjnGvsvHmoR11tpOTbWcIWxu944'
        })
  
        client.getEntries().then(entries =>{
            this.setState({
              loading: false
        });
  
        // Filters articles    
          const articles = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'article';
          }).map((item)=>({
            ...item.fields,
            createdAt: item.sys.createdAt
            })
          )

          // Filters services    
          const services = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'service';
          }).map((item)=>{
            return item.fields
          })

          const team = entries.items.filter((entry)=> {
            return entry.sys.contentType.sys.id === 'team';
          }).map((item)=>{
            return item.fields
          })
  
       this.props.fillArticles(articles);
       this.props.fillTeam(team);
       this.props.fillServices(services);
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
    fillTeam: (team) => dispatch({
      type: 'FILL_TEAM',
      team
    }),
    fillServices: (services) => dispatch({
      type: 'FILL_SERVICES',
      services
    }),
    fillArticles: (articles) => dispatch({
      type: 'FILL_ARTICLES',
      articles
    }),
  }
}

const mapStateToProps = ({ team }) => {
  return { team } ;
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);