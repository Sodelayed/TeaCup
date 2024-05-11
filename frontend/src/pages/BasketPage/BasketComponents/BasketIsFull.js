import React from 'react';
import { Grid, Divider } from '@mui/material';
import { BasketCard, BasketTicket } from './FullBag';
import { useSelector } from 'react-redux';
import { selectUserBasket } from '../../../redux/selectors';

export const BasketIsFull = () => {
	const basket = useSelector(selectUserBasket);
	return (
		<Grid
			container
			spacing={1}
			sx={{
				marginTop: '0',
				minWidth: '520px',
			}}
		>
			<Grid
				item
				xs={9}
				sx={{
					paddingTop: '0',
					borderRight: '0.8px solid rgba(0, 0, 0, 0.12)',
				}}
			>
				<div className="shoppingbag-content">
					{basket.length >= 1 ? (
						basket.map((el, index) => {
							return (
								<div key={index}>
									{index > 0 ? <Divider /> : <></>}
									<BasketCard
										element={el.product}
										id={el.id}
										count={el.count}
										finalPrice={el.finalPrice}
									/>
								</div>
							);
						})
					) : (
						<div></div>
					)}
				</div>
			</Grid>
			<Grid item xs={3}>
				<BasketTicket />
			</Grid>
		</Grid>
	);
};
