import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfoModal } from '../../redux/selectors';
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { CLOSE_INFO_MODAL } from '../../redux/actions';
import { MyInfoForm } from './MyInfoModalComponent/MyInfoForm';

export const MyInfoModal = () => {
	const Agree = useSelector(selectInfoModal);

	const dispatch = useDispatch();
	const closeInfoModal = () => {
		dispatch(CLOSE_INFO_MODAL);
	};
	if (!Agree) return null;
	return (
		<MyInfoOverlay>
			<div className="test">
				<MyInfoForm closeInfoModal={closeInfoModal} />
				<Tooltip title="Add" placement="top">
					<StyledIconButton
						aria-label="delete"
						type="submit"
						onClick={closeInfoModal}
					>
						<CancelIcon fontSize="large" />
					</StyledIconButton>
				</Tooltip>
			</div>
		</MyInfoOverlay>
	);
};
const MyInfoOverlay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;

	& .test {
		padding: 10px;
		background-color: white;
		width: 600px;
		position: relative;
	}
`;

const StyledIconButton = styled(IconButton)`
	position: absolute !important;
	top: 0;
	right: 0;
`;
