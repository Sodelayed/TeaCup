import React from 'react';
import { BuyerButton } from './BuyerButton';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../../redux/selectors';
import { ROLE } from '../../../../../constants/role';
import styled from 'styled-components';
export const ItemInfo = ({ product }) => {
	const roleId = useSelector(selectUserRole);
	return (
		<ProductsInfo>
			<div className="item-data">
				<img
					className="item-data-img"
					src={product.img}
					alt="фото скоро появится"
				/>
				<div className="item-data-other">
					<h3 className="item-data-name">{product.name}</h3>
					<p className="item-data-volume">Объем: {product.volume}</p>
					<p className="item-data-count">Количество: {product.count}</p>
				</div>
				<h2 className="item-data-price">{product.price}руб.</h2>
			</div>
			{roleId === ROLE.BUYER && <BuyerButton item={product} />}
		</ProductsInfo>
	);
};
const ProductsInfo = styled.div`
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	& .item-data {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100px;
	}
	& .item-data-name {
		font-size: 2rem;
		font-family: 'Amatic-B';
		letter-spacing: 0.15rem;
	}
	& .item-data-other,
	.item-data-price,
	.item-data-img {
		margin-left: 3rem;
	}

	& .item-data-volume,
	.item-data-count {
		font-size: 1.5rem;
		font-family: 'Amatic-B';
		letter-spacing: 0.05rem;
		color: rgb(9, 9, 9, 0.4);
	}

	& .item-data-img {
		width: 40px;
		height: 60px;
	}
	& .item-data-price {
		font-size: 2.5rem;
		font-family: 'Amatic-B';
	}
`;
