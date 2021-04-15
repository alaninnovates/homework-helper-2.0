import React from 'react';
import { Box, Text, Center } from '@chakra-ui/react';

function Question(props) {
	return (
		<>
			<Center>
				<Box
					maxW="sm"
					borderWidth="1px"
					borderRadius="lg"
					overflow="hidden"
					width="25em"
				>
					<Box p="6">
						<Box
							mt="1"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated
						>
							<a href={`/question?q=${props.id}`}>
								{props.subject}
							</a>
						</Box>

						<Box>
							<Text noOfLines={2}>{props.question}</Text>
						</Box>
					</Box>
				</Box>
			</Center>
			<br />
		</>
	);
}

export default Question;
