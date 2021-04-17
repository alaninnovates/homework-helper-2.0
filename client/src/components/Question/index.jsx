import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import './Question.css';

function Question(props) {
	return (
		<>
			<Box
				p={5}
				shadow="md"
				borderWidth="1px"
				borderRadius="lg"
				width="25em"
				className="questionBox"
			>
				<a href={`/question?q=${props.id}`}>
					<Heading fontSize="xl">{props.subject}</Heading>
				</a>
				<Text mt={4} noOfLines={2}>
					{props.question}
				</Text>
			</Box>
			<br />
		</>
	);
}

export default Question;
