import React from 'react';
import Link from 'next/link';
import './header.styles.css';

class Header extends React.Component{
	constructor(){
	    super();
	    this.state = {
	    	displayMenu: false
	    }
	  }

	  showHideMenu = () =>{
	  	this.setState({
	  		displayMenu: !this.state.displayMenu
	  	});
	  }

  render(){

  	const { displayMenu } = this.state

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
				<div className="col-9 col-md-3 col-lg-3">
					<Link href="/">
						<img src="./../../static/carlos-logo.png" alt="Header logo" className="header-logo pointer"/>
					</Link>
				</div>
				<div className="col-3 menu-icon only-mobile" onClick={this.showHideMenu}>
					<img src="./../../static/menu.svg" />
				</div>
				<div className="col-12 offset-lg-4 col-md-9 col-lg-5">
					<span className={menuClass}>
						<Link href="/"><a>Inicio</a></Link>
						<Link href="/about"><a>Conóceme</a></Link>
						<Link href="/portfolio"><a>Portafolio</a></Link>
						<Link href="/blog"><a>Blog</a></Link>
					</span>
				</div>
			</div>
	</header>
	
)
  }
};

export default Header;