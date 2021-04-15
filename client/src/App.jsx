import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Main from './pages/Main';
import New from './pages/New';
import Questions from './pages/Question';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ChakraProvider theme={theme}>
				<ColorModeSwitcher />

				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/new" component={New} />
					<Route path="/question" component={Questions} />
					<Route exact path="/404">
						<h1>404 not found</h1>
					</Route>
					<Route path="/">
						<h1>404 not found</h1>
					</Route>
				</Switch>
			</ChakraProvider>
		</Router>
	);
}

export default App;
