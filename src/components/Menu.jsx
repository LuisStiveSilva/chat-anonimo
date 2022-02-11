import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { grey, lightRed, red, white } from '../utils/colors'

const MenuCard = styled(Link)`
    width: 200px;
    height: 200px;
    background: ${white};
    border: 2px solid ${red};
    border-radius: 20px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 500ms ease background;
    color: ${lightRed};
    text-decoration: none;
    &:hover{
        cursor: pointer;
        background: ${lightRed};
        color: ${white}
    }
`
const IconContainer = styled.div`
    font-size: 50px;
`
const CardName = styled.h3`
    font-weight: 700;
    margin: 0;
`

export default function Menu({ item }) {
    const { name, icon, link } = item
    return (
        <MenuCard to={link}>
            <IconContainer>
                {icon}
            </IconContainer>
            <CardName>{name}</CardName>
        </MenuCard>
    )
}
