    import React from 'react';
    import styled from 'styled-components';

    const HeaderContainer = styled.header`
    background-color: #007bff;
    color: white;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    `;

    const Title = styled.h1`
    margin: 0;
    font-size: 2.5em;
    `;

    const Subtitle = styled.p`
    margin: 0;
    font-size: 1.2em;
    font-weight: 300;
    `;

    const Header = () => {
    return (
        <HeaderContainer>
        <Title>Lista de Contatos</Title>
        <Subtitle>Administre os seus contactos de forma eficiente</Subtitle>
        </HeaderContainer>
    );
    };

    export default Header;
