import React from 'react'
import uuid from "react-uuid";
import Navbar from '../../components/Navbar'
import {
    BsFillChatSquareTextFill,
    BsFillPeopleFill,
    BsPersonCircle,
    BsTools
} from "react-icons/bs";
import Menu from '../../components/Menu';
import { Container } from '../../utils/custom-styles';

const list = [
    {
        name: "Lista de chats",
        icon: <BsFillChatSquareTextFill />,
        link: "lista-chats",
    },
    {
        name: "Lista de grupos",
        icon: <BsFillPeopleFill />,
        link: "lista-grupo",
    },
    {
        name: "Lista de usuarios",
        icon: <BsPersonCircle />,
        link: "lista-usuarios",
    },
    {
        name: "Configuración",
        icon: <BsTools />,
        link: "configuracion",
    },
]

export default function Home({ userData }) {
    return (
        <>
            <Navbar title={`Hola ${userData.username}`} backButton={false} />
            <Container justify="space-around">
                {list.map(e => <Menu key={uuid()} item={e} />)}
            </Container>
        </>
    )
}
