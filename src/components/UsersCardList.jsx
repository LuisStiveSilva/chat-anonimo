import React from 'react'
import styled from 'styled-components'
import perro1 from "../assets/images/perro-1.jpg"
import perro2 from "../assets/images/perro-2.jpg"
import perro3 from "../assets/images/perro-3.jpg"
import perro4 from "../assets/images/perro-4.jpg"
import perro5 from "../assets/images/perro-5.jpg"
import { generateChat, getChatsList } from '../utils/chats'
import { Card } from '../utils/custom-styles'
import { getUser } from '../utils/users'
import { useNavigate } from 'react-router-dom'

const UserImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
`

const userDefaultImages = [perro1, perro2, perro3, perro4, perro5]

export default function UsersCardList({ data }) {
    const navigate = useNavigate()
    const enterToChat = (userData) => {
        let chat;
        const currentUser = getUser();
        const userClicked = userData;
        const chats = getChatsList();
        if (userClicked._id === currentUser._id) {
            return
        };
        const individualChats = chats.filter(e => e.type === "individual");
        if (individualChats.length > 0) {
            individualChats.map(e => {
                if (Boolean(e.users.find(x => x._id === currentUser._id)) && Boolean(e.users.find(x => x._id === userClicked._id))) {
                    chat = e
                } else {
                    chat = generateChat("individual", null, [currentUser, userClicked])
                }
            })
        } else {
            chat = generateChat("individual", null, [currentUser, userClicked])
        };
        navigate(`/chat/${chat._id}`)
    }

    return (
        <Card onClick={(e) => enterToChat(data)}>
            <UserImage src={userDefaultImages[Math.floor(Math.random() * (4 - 0)) + 0]} />
            <h2>{data.username}</h2>
        </Card>
    )
}
