import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Routes;
