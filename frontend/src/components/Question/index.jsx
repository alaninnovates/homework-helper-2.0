import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Question(props) {
	return (
		<>
			<Box
				maxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
			>
				<Box p="6">
					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						<a href={`/question?q=${props.id}`}>{props.subject}</a>
					</Box>

					<Box>
						<Text noOfLines={2}>{props.question}</Text>
					</Box>
				</Box>
			</Box>
			<br />
		</>
	);
}

export default Question;
