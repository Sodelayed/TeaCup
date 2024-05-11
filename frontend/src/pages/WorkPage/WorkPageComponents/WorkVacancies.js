import React from 'react';
import styled from 'styled-components';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';

export const WorkVacancies = () => {
	return (
		<WorkVacanciesContainer>
			<h2>Вакансии</h2>
			<div className="vacancy-barista">
				<div className="vacancy-barista-info">
					<h3>Стань частью команды TeaCup.</h3>
					<p>Вакансия: Бариста</p>
					<div className="vacancy-barista-info-feed">
						<a href="https://www.whatsapp.com/?lang=ru_RU">
							<IoLogoWhatsapp color="rgb(103,171,92)" size={'50px'} />
						</a>
						<a href="https://t.me/sodelayed">
							<FaTelegram color="rgb(71,176,211)" size={'50px'} />
						</a>
					</div>
				</div>
				<div className="vacancy-barista-image">
					<img src="images/barista.jpg" alt="barista"></img>
				</div>
			</div>
		</WorkVacanciesContainer>
	);
};

const WorkVacanciesContainer = styled.div`
	margin: 2rem 0;
	& h2 {
		margin: auto;
		font-family: 'Amatic-B';
		font-size: 5rem;
		color: rgb(38, 160, 3);
		text-align: center;
	}
	& .vacancy-barista {
		display: flex;
		width: calc(100% - 8rem);
		padding: 2rem 4rem;
		justify-content: space-evenly;
		align-items: center;
	}
	& .vacancy-barista-image img {
		width: 600px;
		height: 360px;
	}
	& .vacancy-barista-info h3 {
		font-family: 'Amatic-R';
		font-size: 4rem;
	}
	& .vacancy-barista-info p {
		font-family: 'Amatic-R';
		font-size: 2rem;
		text-align: center;
	}
	& .vacancy-barista-info-feed {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	& .vacancy-barista-info-feed :only-child {
		margin: 10px;
	}
`;
