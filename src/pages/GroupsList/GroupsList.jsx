import React from 'react'
import uuid from 'react-uuid'
import Navbar from '../../components/Navbar'
import GroupChatList from "../../components/GroupChatList"
import { getChatsList } from '../../utils/chats'
import { Container } from '../../utils/custom-styles'
import { groupIcons } from '../../utils/groupIcons'


export default function GroupsList() {
    const groupChats = getChatsList().filter(e => e.type === "grupal")

    return (
        <>
            <Navbar title="Lista de grupos" />
            <Container>
                {groupChats.map(e =>
                    <GroupChatList
                        key={uuid()}
                        icon={groupIcons[e.name]}
                        data={e}
                    />
                )}
            </Container>
        </>
    )
}
