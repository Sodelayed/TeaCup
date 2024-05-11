import React from 'react';
import styled from 'styled-components';
export const MainPage = () => {
    return (
        <MainContainer>
            <Title>
                <span>TeaCup</span>
            </Title>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    width: 100%;
`
const Title = styled.div`
	width: 100%;
	margin: auto;
	height: calc(745px - 6rem);
	background-image: url("https://i.ibb.co/R7jMkx5/image.png");
	background-size: cover;
    font-size: 12rem;
    text-align: center;
    
    & > span {
        font-family: 'Zeyada';
        display:inline-block;
        margin-top: calc(6rem + 6rem);
        letter-spacing: 2rem;
        color: #b468b3;
        font-weight: 900;
    }
    
`;