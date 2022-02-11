import React from 'react'
import uuid from 'react-uuid';
import Navbar from '../../components/Navbar'
import { getUsersList } from '../../utils/users'
import { Container } from '../../utils/custom-styles';
import UsersCardList from '../../components/UsersCardList';

export default function UsersList() {
    const usersList = getUsersList()
    return (
        <>
            <Navbar title="Lista de usuarios" />
            <Container>
                {usersList.map(e =>
                    <UsersCardList data={e} key={uuid()} />
                )}
            </Container>
        </>
    )
}
