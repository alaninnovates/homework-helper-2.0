import React from 'react';
import Question from '../../components/Question';
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
	}
	render() {
		return (
			<>
				{this.state.questions.map(q => (
					<Question subject={q.subject} question={q.question} />
				))}
			</>
		);
	}
}

export default Main;
