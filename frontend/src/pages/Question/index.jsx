import React from 'react';
import {
	Stack,
	Text,
	Textarea,
	Input,
	Button,
	Box,
	Center,
} from '@chakra-ui/react';
import Comment from './comment';
import { getQuestionDetails, newComment } from '../../scripts/api';

class Question extends React.Component {
	constructor() {
		super();
		this.state = {
			question: '',
			subject: '',
			name: '',
			postid: '',
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
		const { question, subject, name, comments } = await getQuestionDetails(
			id
		);
		this.setState({
			question,
			subject,
			name,
			comments: comments === null ? [] : comments,
			postid: id,
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

	async handleSubmit(event) {
		event.preventDefault();
		await newComment(this.state);
		// this.setState({ comment: '', commentAuthor: '' });
		window.location.reload();
	}

	render() {
		return (
			<div>
				<br />
				<Center>
					<Box borderWidth="1px" borderRadius="lg" width="40em" p="6">
						<Stack spacing={3}>
							<Text fontSize="3xl">{this.state.subject}</Text>
							<Text fontSize="2xl">{this.state.question}</Text>
							<Text fontSize="1xl">
								Author: {this.state.name}
							</Text>
						</Stack>
					</Box>
				</Center>
				<br />
				<Text fontSize="2xl">Comments</Text>
				<br />
				{this.state.comments.map(comment => (
					<Comment key={comment._id} data={comment} />
				))}
				<br />
				<Center>
					<Box borderWidth="1px" borderRadius="lg" width="35em" p="6">
						<form
							className="addQuestion"
							onSubmit={this.handleSubmit}
						>
							<label>
								Name:
								<br />
								<Input
									width="10em"
									height="2em"
									placeholder="Name (optional)"
									type="text"
									id="fname"
									value={this.state.commentAuthor}
									onChange={this.handleChange}
								/>
							</label>
							<br />
							<label>
								Answer:
								<br />
								<Textarea
									width="30em"
									placeholder="Answer to add"
									type="text"
									id="comment"
									value={this.state.comment}
									onChange={this.handleChange}
								/>
							</label>
							<br />
							<Button type="submit" colorScheme="blue">
								Add answer
							</Button>
						</form>
					</Box>
				</Center>
			</div>
		);
	}
}

export default Question;
