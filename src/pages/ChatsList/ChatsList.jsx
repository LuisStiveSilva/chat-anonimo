import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import GroupChatList from '../../components/GroupChatList'
import Navbar from '../../components/Navbar'
import UsersCardList from '../../components/UsersCardList'
import { getChatsList } from '../../utils/chats'
import { Container, InputText } from '../../utils/custom-styles'
import { groupIcons } from '../../utils/groupIcons'
import { getUser } from '../../utils/users'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { lightRed } from '../../utils/colors';
import { useForm } from "react-hook-form";

const InputContainer = styled.form`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    margin-bottom: 20px;
`

const SearchIcon = styled.button`
    color: ${lightRed};
    font-size: 25px;
    margin-left: 15px;
    background: transparent;
    border:none;
    outline:none;
    display: flex;
    justify-content:center;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
`

export default function ChatsList() {
    const [activeChats, setActiveChats] = useState([])
    const { register, handleSubmit } = useForm();
    const [text, setText] = useState("")
    const currentUser = getUser()
    const chatsList = getChatsList()

    useEffect(() => {
        allActiveChats()
    }, [])

    const allActiveChats = (withReturn = false) => {
        let tempArr = []
        chatsList.forEach(element => {
            if (element.users.find(e => e._id === currentUser._id))
                tempArr.push(element)
        });
        setActiveChats([...tempArr])
        if (withReturn)
            return (tempArr)
    }

    const onSubmit = (data) => {
        let tempArr = []
        const activesFilter = allActiveChats(true)
        activesFilter.forEach(element => {
            if (element.type === "grupal") {
                if (element.name.toLowerCase().includes(data.search.toLowerCase()))
                    tempArr.push(element)
            } else {
                if (element.users.find(e => e.username.toLowerCase().includes(data.search.toLowerCase())))
                    tempArr.push(element)
            }
        });
        setActiveChats([...tempArr])
    };

    return (
        <>
            <Navbar title="Lista de chats" />
            <Container>
                <InputContainer onSubmit={handleSubmit(onSubmit)}>
                    <InputText
                        width="200px"
                        placeholder="Buscar"
                        {...register("search")}
                    />
                    <SearchIcon type='submit' >
                        <FaSearch />
                    </SearchIcon>
                </InputContainer>
                {activeChats.map(e => {
                    if (e.type === "grupal")
                        return <GroupChatList
                            key={uuid()}
                            icon={groupIcons[e.name]}
                            data={e}
                        />
                    else return <UsersCardList data={e.users.find(x => x._id !== currentUser._id)} key={uuid()} />
                })}
            </Container>
        </>
    )
}
