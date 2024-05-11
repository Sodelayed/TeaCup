import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import {
	selectDeleteModalIsOpen,
	selectDeleteModalOnCancel,
	selectDeleteModalOnConirm,
	selectDeleteModalText,
} from '../../redux/selectors';

export const DeleteModal = () => {
	const isOpen = useSelector(selectDeleteModalIsOpen);
	const header = useSelector(selectDeleteModalText);
	const onConfirm = useSelector(selectDeleteModalOnConirm);
	const onCancel = useSelector(selectDeleteModalOnCancel);

	if (!isOpen) return null;

	return (
		<DeleteUsersOverlay>
			<div className="delete-window">
				<h1 className="delete-header">{header}</h1>
				<div className="delete-buttonsContainer">
					<button className="delete-confirmButton" onClick={onConfirm}>
						Удалить
					</button>
					<button className="delete-canselButton" onClick={onCancel}>
						Отмена
					</button>
				</div>
			</div>
		</DeleteUsersOverlay>
	);
};
const DeleteUsersOverlay = styled.div`
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
	cursor: pointer;

	& .delete-window {
		cursor: default;
		width: 500px;
		background-color: white;
		border-radius: 15px;
		border: 2px solid rgb(9, 9, 9, 0.7);
		user-select: none;
	}
	& .delete-header {
		font-family: 'Amatic-B';
		letter-spacing: 0.09em;
		font-size: 3rem;
		text-align: center;
		color: rgb(9, 9, 9);
	}
	& .delete-buttonsContainer {
		margin: 40px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	& .delete-confirmButton,
	.delete-canselButton {
		width: 180px;
		height: 50px;
		margin: 0;
		border: none;
		font-size: 20px;
		border-radius: 7px;
		background-color: white;
		border: 1px solid rgb(9, 9, 9, 0.7);
		cursor: pointer;
		transition: 1.2s ease;
	}
	& .delete-confirmButton:hover {
		transition: 0.5s ease;
		background-color: rgb(254, 24, 0, 0.8);
		color: white;
	}
	& .delete-canselButton:hover {
		transition: 0.5s ease;
		background-color: rgb(9, 9, 9, 0.8);
		color: white;
	}
`;
