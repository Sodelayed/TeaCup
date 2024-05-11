import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const FooterFeedback = () => {
	return (
		<FooterFeedbackContainer item xs={4}>
			<h2 className="footer-feedback-header">Контакты</h2>
			<a
				className="footer-feedback-email"
				href="https://mail.ru"
				target="_blank"
				rel="noreferrer"
			>
				diver_space@mail.ru
			</a>
			<a
				className="footer-feedback-telegram"
				href="https://t.me/sodelayed"
				target="_blank"
				rel="noreferrer"
			>
				t.me/sodelayed
			</a>
		</FooterFeedbackContainer>
	);
};

const FooterFeedbackContainer = styled(Grid)`
	display: flex;
	flex-direction: column !important;
	justify-content: center;

	.footer-feedback-header {
		font-size: 6rem;
		letter-spacing: 0.3rem;
		text-align: center;
		color: rgb(251, 249, 213);
	}
	.footer-feedback-email,
	.footer-feedback-telegram {
		font-size: 4rem;
		letter-spacing: 0.1rem;
		text-align: center;
		color: rgb(251, 249, 213);
		text-decoration: none;
	}
	.footer-feedback-email:hover,
	.footer-feedback-telegram:hover {
		cursor: pointer;
		transition: 0.2s ease;
		letter-spacing: 0.15rem;
		color: rgb(180, 170, 245);
		text-shadow:
			0 0 5px rgb(251, 249, 213),
			0 0 25px rgb(251, 249, 213);
	}
`;
