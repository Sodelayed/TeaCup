import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import styled from 'styled-components';

export const VolumeOfProduct = ({ alignment, handleChangeButtons, price }) => {
	return (
		<VolumeOfProductContainer>
			<p className="productModalVolume"> Объем:</p>
			<ToggleButtonGroup
				color="primary"
				value={alignment}
				exclusive
				onChange={handleChangeButtons}
			>
				{Object.keys(price).map((el, index) => {
					return (
						<ToggleButton
							key={index}
							value={index}
							sx={{
								marginRight: '2rem',
								border: '1px solid rgba(0, 0, 0, 0.12) !important',
								fontFamily: 'Amatic-R',
								fontSize: '2rem',
							}}
							size="large"
						>
							{el}
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		</VolumeOfProductContainer>
	);
};

const VolumeOfProductContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 4rem;
	height: 3rem;
	justify-content: space-evenly;
	align-items: center;
	.productModalVolume {
		font-size: 3rem;
		text-align: center;
		font-family: 'Amatic-R';
	}
`;
