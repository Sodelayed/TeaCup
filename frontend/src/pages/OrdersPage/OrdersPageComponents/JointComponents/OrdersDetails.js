import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ItemFromOrder } from '../OrdersDetailsComponents/ItemFromOrder';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../redux/selectors';
import { changeOrderState } from '../../../../redux/actions';
import { ROLE } from '../../../../constants/role';

export const OrdersDetails = ({ order }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const closeOrder = () => {
		dispatch(changeOrderState(order.id, 'ready'));
	};
	return (
		<Accordion
			sx={{
				bgcolor: 'rgb(186, 104, 180, 0.0)',
				boxShadow: 'none',
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1-content"
				id="panel1-header"
				sx={{
					fontSize: '1.15rem',
					fontFamily: 'Amatic-B',
					letterSpacing: '0.07rem',
					color: 'rgb(9, 9, 9, 0.7)',
					marginLeft: '1rem',
				}}
			>
				детали заказа
			</AccordionSummary>
			<AccordionDetails>
				{order.items.map((product, index) => {
					return (
						<ItemFromOrder order={order} product={product} index={index} />
					);
				})}
				{order.state !== 'ready' && roleId !== ROLE.BUYER && (
					<Button
						variant="contained"
						color="secondary"
						onClick={closeOrder}
						sx={{ float: 'right', marginBottom: '1rem' }}
					>
						Завершить заказ
					</Button>
				)}
			</AccordionDetails>
		</Accordion>
	);
};
