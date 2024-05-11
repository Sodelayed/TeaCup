import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Header, Footer, Alert, PageNotFound } from './components';
import { DeleteModal, MyInfoModal, ProductModal } from './ModalWindows';
import {
	MainPage,
	MenuPage,
	LoginPage,
	RegisterPage,
	ProfilePage,
	BasketPage,
	ShopLocationPage,
	CheckOutPage,
	OrdersPage,
	MyInfoPage,
	UsersList,
	WorkPage,
	AddNewProduct,
} from './pages';
import { useCheckUser } from './hooks/use-check-user';

export function TeaCup() {
	useCheckUser();
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/menu" element={<MenuPage />} />
				<Route path="/location" element={<ShopLocationPage />} />
				<Route path="/work" element={<WorkPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/profile" element={<ProfilePage />}>
					<Route path="/profile/info" element={<MyInfoPage />} />
					<Route path="/profile/orders" element={<OrdersPage />} />
					<Route path="/profile/basket" element={<BasketPage />} />
					<Route path="/profile/users" element={<UsersList />} />
					<Route path="/profile/create-product" element={<AddNewProduct />} />
				</Route>
				<Route path="/checkout" element={<CheckOutPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ProductModal />
			<MyInfoModal />
			<DeleteModal />
			<Alert />
			<Footer />
		</>
	);
}
