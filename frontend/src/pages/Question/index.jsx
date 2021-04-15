import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { getQuestionDetails } from '../../scripts/api';

class Question extends React.Component {
	constructor() {
		super();
		this.state = {
			question: '',
			subject: '',
			comments: [],

			comment: '',
			commentAuthor: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		const id = new URLSearchParams(this.props.location.search).get('q');
		if (!id) return (window.location.href = '/404');
		const {
			question,
			subject,
			author,
			comments,
		} = await getQuestionDetails(id);
		this.setState({
			question,
			subject,
			author,
			comments,
		});
	}

	handleChange(event) {
		switch (event.target.id) {
			case 'fname':
				this.setState({ commentAuthor: event.target.value });
				break;
			case 'comment':
				this.setState({ comment: event.target.value });
				break;

			default:
				break;
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<Stack spacing={3}>
					<Text fontSize="3xl">{this.state.question}</Text>
					<Text fontSize="2xl">{this.state.question}</Text>
					<Text fontSize="sm">Author: {this.state.author}</Text>
				</Stack>
				<form className="addQuestion" onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							id="fname"
							value={this.state.commentAuthor}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						Comment:
						<input
							type="text"
							id="comment"
							value={this.state.comment}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Question;
