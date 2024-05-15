import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocations } from '../../redux/selectors';
import { loadLocations } from '../../redux/actions';

export const ShopLocationPage = () => {
	const dispatch = useDispatch();

	const [state, setState] = useState();
	const shopLocations = useSelector(selectLocations);
	useEffect(() => {
		if (shopLocations.length < 1) dispatch(loadLocations());
	}, [dispatch, shopLocations.length]);

	const func = (coords) => {
		setState({ center: coords, zoom: 18 });
		window.scroll(0, 1200);
	};
	return (
		<LocationContainer>
			<LocationTitleContainer>
				<span>МЫ НА КАРТЕ</span>
			</LocationTitleContainer>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{ paddingLeft: '12rem' }}
			>
				{shopLocations.length > 0 &&
					shopLocations.map((el, key) => {
						return (
							<Grid item xs={6} key={key} sx={{ marginBottom: '2rem' }}>
								<div className="map-link-container">
									<h1 className="map-link-header">
										{el.category}, {el.title}
									</h1>
									<p className="map-link-adress">{el.adress}</p>
									<p
										className="map-link"
										onClick={() => func(el.coords)}
									>
										показать на карте <MdOutlineArrowRightAlt />
									</p>
								</div>
							</Grid>
						);
					})}
			</Grid>
			<YMaps>
				<StyledMap
					state={state}
					defaultState={{ center: [55.75257, 37.62263], zoom: 11 }}
				>
					{shopLocations.length > 0 &&
						shopLocations.map((el, key) => {
							return (
								<Placemark
									key={key}
									geometry={el.coords}
									options={{
										iconLayout: 'default#image',
										iconImageSize: [50, 50],
										iconImageHref:
											'https://i.ibb.co/Q9bGfrT/cup-icon.png',
									}}
								/>
							);
						})}
				</StyledMap>
			</YMaps>
		</LocationContainer>
	);
};
const LocationContainer = styled.div`
	& .map-link-header {
		font-size: 4rem;
		font-family: 'Amatic-R';
		color: rgb(180, 104, 179);
	}
	& .map-link-adress {
		font-size: 2rem;
		font-family: 'Amatic-B';
		color: rgb(180, 104, 179, 0.45);
	}
	& .map-link {
		display: flex;
		margin-top: 1rem;
		align-items: center;
		font-size: 1.5rem;
		font-family: 'Amatic-B';
		color: rgb(180, 104, 179, 0.45);
		cursor: pointer;
	}
`;
const StyledMap = styled(Map)`
	width: 100%;
	height: 500px;
	margin: auto;
	margin-top: 2rem;
	[class*='ymaps-2'][class*='-inner-pane'] {
		background-color: rgb(251 249 213 / 79%);
	}
	[class*='copyrights-pane'] {
		display: none !important;
	}
	& .ymaps-2-1-79-ground-pane {
		filter: grayscale(1);
		mix-blend-mode: multiply;
	}
`;
const LocationTitleContainer = styled.div`
	display: block;
	width: 100%;
	margin: auto;
	height: calc(100vh - 5rem);
	min-height: 654.5px;

	color: black;
	background-size: cover;
	font-size: 12rem;
	text-align: center;
	scroll-behavior: smooth;
	margin-bottom: 0px;

	& span {
		font-family: 'Amatic-B';
		display: inline-block;
		margin-top: calc(6rem + 6rem);
		letter-spacing: 2rem;
		color: rgb(204, 167, 202);
		font-weight: 900;
		text-shadow: 0px 0px 1px rgb(125, 101, 123);
		cursor: default;
		opacity: 1;
	}
`;
