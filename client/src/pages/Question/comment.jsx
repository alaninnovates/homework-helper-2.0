import React from 'react';
import { Text, Box, Center } from '@chakra-ui/react';

function Comment(props) {
	return (
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
						{props.data.comment}
					</Box>

					<Box>
						<Text>Author: {props.data.name}</Text>
					</Box>
				</Box>
			</Box>
			<br />
		</Center>
	);
}

export default Comment;
