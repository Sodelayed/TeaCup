import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { FooterLogo, FooterNavigation } from './FooterComponents';
import { FooterFeedback } from './FooterComponents/FooterFeedback';

export const Footer = () => {
	return (
		<FooterContainer>
			<Grid container>
				<FooterLogo />
				<FooterNavigation />
				<FooterFeedback />
			</Grid>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background-color: rgb(180, 170, 245);
	width: 100%;
	flex-shrink: 0;
	padding: 30px 0;
	font-family: 'Amatic-B';
`;
