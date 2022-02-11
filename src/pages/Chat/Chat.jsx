import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom';
import { addMessage, getChat, hiddenMessage } from '../../utils/chats';
import { getUser } from '../../utils/users';
import { InputText } from '../../utils/custom-styles';
import styled from 'styled-components';
import { MdSend, MdDelete } from "react-icons/md";
import { grey, lightRed, red, white } from '../../utils/colors';
import moment from 'moment';
import 'moment/locale/es';
import uuid from 'react-uuid';

const InputTextContainer = styled.div`
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background:${white};
    display:flex;
    justify-content: space-between;
    align-items:center;
`
const SendIcon = styled(MdSend)`
    font-size: 30px;
    margin-left: 20px;
    color: ${red};
    &:hover{
        cursor: pointer;
    }
`
const ChatContainer = styled.div`
    padding: 120px 20px 125px;
    display:flex;
    flex-direction:column;
`
const MessageBox = styled.div`
    width: 200px;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    background: ${white};
    display:flex;
    align-self: ${props => props.align};
    margin: 10px 0;
    flex-direction:column;
    border: 1px solid ${props => props.borderColor};
    position:relative;
`

const Time = styled.p`
    align-self: flex-end;
    font-size: 12px;
    margin-top: 10px;
    font-style: italic;
`

const DeleteIcon = styled(MdDelete)`
    color:${red};
    position:absolute;
    top:50%;
    left:-35px;
    font-size:30px;
    margin-top:-15px;
    &:hover{
        cursor:pointer;
    }
`

export default function Chat() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    let { id } = useParams();
    const currentUser = getUser();
    const currentChat = getChat(id)
    const allMessages = [...currentChat.messages]
    useEffect(() => {
        if (currentChat.type === "grupal") {
            setTitle(currentChat.name)
        } else {
            const otherUser = currentChat.users.find(e => e._id !== currentUser._id)
            setTitle(otherUser.username)
        }
    }, [])

    const sendMessage = () => {
        addMessage(currentUser, id, text, moment().toDate())
        window.location.reload()
    }
    console.log(allMessages)
    return (
        <>
            <Navbar title={title} />
            <ChatContainer>
                {allMessages.map(e => {
                    if (e.hidden === true && e.user._id === currentUser._id) {
                        return null
                    } else {
                        return (
                            <MessageBox
                                key={uuid()}
                                align={e.user._id === currentUser._id
                                    ? "flex-end"
                                    : "flex-start"
                                }
                                borderColor={e.user._id === currentUser._id
                                    ? lightRed
                                    : grey
                                }
                            >
                                {e.user._id === currentUser._id &&
                                    <DeleteIcon
                                        onClick={() => {
                                            hiddenMessage(e, id);
                                            window.location.reload()
                                        }}
                                    />}
                                <p>{e.text}</p>
                                <Time>{moment(e.date).fromNow()}</Time>
                            </MessageBox>
                        )
                    }
                })}
            </ChatContainer>
            <InputTextContainer>
                <InputText
                    width="100%"
                    placeholder='Escriba su mensaje'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={e => (e.code === "Enter" || e.code === "NumpadEnter") &&
                        sendMessage()
                    }
                />
                <SendIcon onClick={() => text !== "" && sendMessage()} />
            </InputTextContainer>
        </>
    )
}
