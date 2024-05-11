import React from 'react';
import styled from 'styled-components';

export const CheckOutCommentField = ({ comment, setComment }) => {
	return (
		<CommentContainer>
			<textarea
				className="checkout-comment"
				placeholder="Комментарий к заказу"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
		</CommentContainer>
	);
};

const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1.5rem;

	.checkout-comment {
		display: block;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.23);
		max-height: 128px;
		min-height: 64px;
		padding: 0.5rem;
		width: calc(100% - 1rem);
		resize: vertical;
	}
	.checkout-comment:focus-visible {
		border: 2px solid rgb(38, 160, 3);
		outline: none;
	}
`;
