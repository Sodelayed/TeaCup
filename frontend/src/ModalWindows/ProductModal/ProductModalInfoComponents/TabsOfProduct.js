import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import styled from 'styled-components';
export const TabsOfProduct = ({ description, compound }) => {
	const [value, setValue] = useState('one');
	const handleChangeTabs = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Tabs
				value={value}
				onChange={handleChangeTabs}
				textColor="primary"
				indicatorColor="primary"
			>
				<Tab
					sx={{
						fontFamily: 'Amatic-B',
						fontSize: '1.5rem',
						letterSpacing: '0.1rem',
					}}
					value="one"
					label="Описание"
				/>
				<Tab
					sx={{
						fontFamily: 'Amatic-B',
						fontSize: '1.5rem',
						letterSpacing: '0.1rem',
					}}
					value="two"
					label="Состав"
				/>
			</Tabs>
			<TabsText>{value === 'one' ? `${description}` : `${compound}`}</TabsText>
		</>
	);
};
const TabsText = styled.div`
	margin-top: 1rem;
	font-size: 1.4rem;
	letter-spacing: 0.03rem;
	font-family: 'Amatic-R';
	height: 8.7rem;
	overflow: auto;
`;
