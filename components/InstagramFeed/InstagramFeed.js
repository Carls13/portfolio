import React, { Fragment } from 'react';

import { Feed, Account, Grid, Post, Image } from './styles.js';

import { useFetching } from './../../hooks/useFetching';

import { Loader } from './../Loader/Loader';

export const InstagramFeed = () => {
	const [loading, data] = useFetching("https://www.instagram.com/carlosshb98/?__a=1");

	return (
		<Fragment>
		{
			loading ? <Loader/> : 
			<Feed>
		   		<Account href="https://www.instagram.com/carlosshb98/" target="_blank">@carlosshb98</Account>
		   		<Grid>
		   		{
		   			data.filter((element, i) => i <= 8).map((element, i) => {
		   				const { display_url } = element.node;
		   				return (
		   					<Post key={i} href="https://www.instagram.com/carlosshb98/" target="_blank">
		   						<Image src={display_url} alt="Carlos Hernandez"/>
		   					</Post>
		   					)
		   			})
		   		}
			    </Grid>
	   		</Feed>
		}
		</Fragment>
   );
}
