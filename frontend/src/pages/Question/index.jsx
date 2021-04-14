import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Question from './question';

function Questions() {
	let match = useRouteMatch();

	return (
		<>
			<Switch>
				<Route
					path={`${match.path}/:questionId`}
					component={Question}
				/>
				<Route path={match.path}>
					<Redirect to="/404" />
				</Route>
			</Switch>
		</>
	);
}

export default Questions;
