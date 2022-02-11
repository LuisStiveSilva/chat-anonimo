import React from 'react'
import styled from 'styled-components'
import { lightRed, white } from '../utils/colors'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: ${lightRed};
    color: ${white};
    display: flex;
    justify-content: ${props => props.center ? "center" : "space-between"};
    align-items: center;
    padding: 0 20px;
    position: fixed;
`
const BackIcon = styled(IoMdArrowRoundBack)`
    font-size: 40px;
    color: ${white};
`

export default function Navbar({ title = "Hola", backButton = true }) {
    return (
        <Nav center={!Boolean(backButton)}>
            {backButton &&
                <Link to="/">
                    <BackIcon />
                </Link>
            }
            <h1>{title}</h1>
        </Nav>
    )
}
