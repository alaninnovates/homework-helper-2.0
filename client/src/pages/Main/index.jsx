import React from 'react';
import Question from '../../components/Question';
import { Text, Box, Grid, GridItem } from '@chakra-ui/react';
import { getQuestions } from '../../scripts/api';

// function Main() {
// 	const [questions, setQuestions] = useState(null);

// 	useEffect(() => {
// 		const getQuestionList = async () => {
// 			const { q } = await getQuestions();
// 			console.log(q);
// 			setQuestions(q);
// 		};
// 		getQuestionList();
// 	}, []);

// 	return (
// 		<>
// 			{questions.map(q => (
// 				<Question subject={q.subject} question={q.question} />
// 			))}
// 		</>
// 	);
// }

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			questions: [],
		};
	}
	async componentDidMount() {
		const { questions } = await getQuestions();
		this.setState({
			questions,
		});
		console.log(this.state);
	}
	render() {
		return (
			<>
				<Text fontSize="3xl">Recent questions</Text>
				<br />
				<br />

				<Grid
					w="100%"
					h="100%"
					gridTemplateColumns="repeat(3, 1fr)"
					gridTemplateRows="1"
				>
					<GridItem colSpan={2}>
						{this.state.questions.map(q => (
							<Question
								key={q._id}
								subject={q.subject}
								question={q.question}
								id={q._id}
							/>
						))}
					</GridItem>
					<GridItem colSpan={2}>
						<Box
							width="20em"
							p={3}
							borderWidth="1px"
							borderRadius="lg"
						>
							<Text fontSize="2xl">
								<a href="/new">Add</a>
							</Text>
						</Box>
					</GridItem>
				</Grid>
			</>
		);
	}
}

export default Main;
