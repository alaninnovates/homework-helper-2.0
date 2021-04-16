import React from 'react';
import { Box, Text, Center, Heading } from '@chakra-ui/react';

function Question(props) {
	return (
		<>
			<Center>
				<Box
					p={5}
					shadow="md"
					borderWidth="1px"
					borderRadius="lg"
					width="25em"
				>
					<a href={`/question?q=${props.id}`}>
						<Heading fontSize="xl">{props.subject}</Heading>
					</a>
					<Text mt={4} noOfLines={2}>
						{props.question}
					</Text>
				</Box>
			</Center>
			<br />
		</>
	);
}

export default Question;
