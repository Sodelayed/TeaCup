import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
	selectProductModalIsOpen,
	selectProductModalStatus,
	selectUserRole,
} from '../../redux/selectors';
import {
	CloseProductModal,
	DeleteProductModal,
	EditProductModal,
} from './ProductModalComponents';

import { ProductModalInfo } from './ProductModalInfo';
import { ProductModalEdit } from './ProductModalEdit';
import { ROLE } from '../../constants/role';
import { CLOSE_PRODUCT_MODAL } from '../../redux/actions';

export const ProductModal = () => {
	const Agree = useSelector(selectProductModalIsOpen);
	const status = useSelector(selectProductModalStatus);
	const roleId = useSelector(selectUserRole);
	const dispatch = useDispatch();

	if (!Agree) return null;
	const closeProductModal = () => {
		dispatch(CLOSE_PRODUCT_MODAL);
	};
	return (
		<Overlay>
			<div className="modalContainer">
				{status === 'info' ? <ProductModalInfo /> : <ProductModalEdit />}
				<div className="product-modal-buttons">
					{roleId === ROLE.ADMINISTRATOR ? <EditProductModal /> : <div></div>}
					{roleId === ROLE.ADMINISTRATOR ? <DeleteProductModal /> : <div></div>}
					<CloseProductModal closeProductModal={closeProductModal} />
				</div>
			</div>
		</Overlay>
	);
};

const Overlay = styled.div`
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

	& .modalContainer {
		position: relative;
		width: 80%;
		height: 80%;
		min-height: 600px;
		background-color: white;
		background-position: 1px;
	}
	& .product-modal-buttons {
		position: absolute !important;
		top: 0px;
		right: 0px;
		background-color: white;
	}
`;
