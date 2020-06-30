import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './styles'

export const Loader = ({ small }) => (
   <SpinnerOverlay small={small}>
		<SpinnerContainer/>
	</SpinnerOverlay>
);