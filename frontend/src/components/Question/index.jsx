import React from 'react';
import { Box } from '@chakra-ui/react';

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
						{props.subject}
					</Box>

					<Box>{props.question}</Box>
				</Box>
			</Box>
			<br />
		</>
	);
}

export default Question;
