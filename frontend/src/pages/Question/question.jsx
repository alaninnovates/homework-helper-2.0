import React from 'react';
import {} from '@chakra-ui/react';
import { withRouter } from 'react-router-dom';
import { getQuestionDetails } from '../../scripts/api';

// function Question() {
// 	let { questionId } = useParams();
// 	return <h3>Requested topic ID: {questionId}</h3>;
// }

class Question extends React.Component {
	constructor() {
		super();
		this.state = {
			question: '',
			subject: '',
			comments: [],
		};
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		console.log(id);
		const { question, subject, comments } = await getQuestionDetails(id);
		this.setState({
			question,
			subject,
			comments,
		});
	}

	render() {
		return <div>{this.state.question}</div>;
	}
}

export default withRouter(Question);
