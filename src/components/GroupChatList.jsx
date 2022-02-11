import React, { useState } from 'react'
import { Card } from '../utils/custom-styles'
import styled from 'styled-components'
import { addUserToChat, getChat } from '../utils/chats'
import { getUser } from '../utils/users'
import { useNavigate } from 'react-router-dom'


const IconContainer = styled.div`
    font-size: 50px;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const UsersQuantity = styled.span`
    font-size: 15px;
    text-align: right
`

export default function GroupChatList({ icon, data }) {
    const navigate = useNavigate()
    const enterToChat = (data) => {
        const user = getUser()
        if (data.users.length > 0) {
            const finder = data.users.find(e => e._id === user._id)
            if (!Boolean(finder)) {
                addUserToChat(user, data._id)
            }
        } else {
            addUserToChat(user, data._id)
        }
        navigate(`/chat-anonimo/chat/${data._id}`)
    }

    return (
        <Card onClick={() => enterToChat(data)}>
            <IconContainer>
                {icon}
            </IconContainer>
            <h2>{data.name} <UsersQuantity >({data.users.length} {data.users.length === 1 ? "Usuario" : "Usuarios"})</UsersQuantity></h2>
        </Card>
    )
}
