import React from 'react';
import styled from 'styled-components';

export const WorkDescription = () => {
	return (
		<WorkDescriptionContainer>
			<p>
				Это уютное чайное заведение расположено в самом сердце города, в старинном
				здании с атмосферой старого мира. Здесь каждый гость может насладиться
				богатым выбором чая, от классических сортов до экзотических смесей.
			</p>
			<p>
				Профессиональные чайные мастера здесь умело смешивают ароматные листья,
				создавая настоящие шедевры в чашке. Великолепные десерты и закуски
				идеально дополняют чашку чая, делая посещение этого заведения незабываемым
				опытом.
			</p>
			<p>
				Мы ищем талантливого и страстного чайного мастера для нашего уютного
				чайного заведения в самом центре города. Если вы обожаете чай и умеете
				создавать неповторимые смеси, то эта работа для вас!
			</p>
		</WorkDescriptionContainer>
	);
};

const WorkDescriptionContainer = styled.div`
	margin: auto;
	padding: 2rem 4rem;
	font-family: 'Amatic-R';
	font-size: 1.75rem;
	& p {
		margin: 1rem 0;
		text-indent: 2rem;
	}
	& p::first-letter {
		font-size: 2rem;
		font-weight: bold;
		color: rgb(180, 170, 245);
	}
`;
