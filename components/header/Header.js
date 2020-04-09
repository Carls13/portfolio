import React from 'react';

import Link from 'next/link';
import './header.styles.css';

import { connect } from 'react-redux';

import { selectMessages } from '../../redux/translation/translation.selectors'

class Header extends React.Component{
	constructor(){
	    super();
	    this.state = {
	    	displayMenu: false,
	    }
	  }

	  showHideMenu = () =>{
	  	this.setState({
	  		displayMenu: !this.state.displayMenu
	  	});
	  }

	  handleChange = (event) => {
	  	const { changeLanguage } = this.props;

	  	changeLanguage(event.target.value);
	  }

  render(){

  	const { displayMenu } = this.state;
  	const { language, messages } = this.props;

	//Controls class of menu item
	let menuClass;
	if (displayMenu){
		menuClass = 'header-menu visible-menu';
	} else {
		menuClass = 'header-menu';
	}

  	return(
  		<header>
			<div className="row">
				<div className="col-8 col-sm-3 col-lg-2">
					<Link href="/">
						<img src="./../../static/carlos-logo.png" alt="Header logo" className="header-logo pointer"/>
					</Link>
				</div>
				<div className="col-2 only-mobile lang-div">
					<select value={language} onChange={this.handleChange}>
				            <option value="EN">EN</option>
				            <option value="ES">ES</option>
	          		</select>
				</div>
				<div className="col-2 menu-icon only-mobile" onClick={this.showHideMenu}>
					<img src="./../../static/menu.svg" alt="Menú" />
				</div>
				<div className="col-12 offset-lg-5 col-sm-9 col-lg-4">
					<span className={menuClass}>
						<Link href="/"><a>{messages.HOME}</a></Link>
						<Link href="/about"><a>{messages.ABOUT}</a></Link>
						<Link href="/portfolio"><a>{messages.PORTFOLIO}</a></Link>
						<Link href="/blog"><a>{messages.BLOG}</a></Link>
						<select className="footer-desktop" value={language} onChange={this.handleChange}>
				            <option value="EN">EN</option>
				            <option value="ES">ES</option>
		          		</select>	
					</span>
				</div>
			</div>
					
	</header>
	)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => dispatch({
      type: 'CHANGE_LANGUAGE',
      payload: language
    })
  }
}

const mapStateToProps = (state) => ({
  messages: selectMessages('HEADER')(state),
  language: state.translation.language 
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);