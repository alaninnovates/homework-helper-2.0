import React from 'react';
import { Textarea, Input, Text, Button } from '@chakra-ui/react';
import { newQuestion } from '../../scripts/api';

class New extends React.Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			subject: '',
			question: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		switch (event.target.id) {
			case 'fname':
				this.setState({ firstName: event.target.value });
				break;
			case 'subject':
				this.setState({ subject: event.target.value });
				break;
			case 'question':
				this.setState({ question: event.target.value });
				break;

			default:
				break;
		}
	}

	async handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		await newQuestion(this.state);
	}

	render() {
		return (
			<div>
				<Text fontSize="4xl">Add a question</Text>
				<br />
				<form className="addQuestion" onSubmit={this.handleSubmit}>
					<label>
						<Text fontSize="2xl">Name:</Text>
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
						<Text fontSize="2xl">Subject:</Text>
						<br />
						<Input
							width="10em"
							height="2em"
							placeholder="ex: math"
							type="text"
							id="subject"
							value={this.state.subject}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						<Text fontSize="2xl">Question:</Text>
						<br />
						<Textarea
							width="30em"
							placeholder="Question to add"
							type="text"
							id="question"
							value={this.state.comment}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<Button type="submit" colorScheme="blue">
						Add question
					</Button>
				</form>
			</div>
		);
	}
}

export default New;
