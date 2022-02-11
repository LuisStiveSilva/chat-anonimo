import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Container, InputText, Button } from '../../utils/custom-styles'
import { editUser, getUser } from '../../utils/users'

export default function Configuration() {
    const [username, setUsername] = useState("")
    const actualUser = getUser()
    const changeName = () => {
        editUser(username);
        window.location.reload();
    }
    return (
        <>
            <Navbar title="Configuración" />
            <Container justify="center" direction="column">
                <h2>{actualUser.username}, ¿quiere cambiar su nombre?</h2>
                <InputText
                    width="300px"
                    placeholder="Ingrese nombre"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyPress={e => (e.code === "Enter" || e.code === "NumpadEnter") && changeName()}
                />
                <Button
                    onClick={() => changeName()}
                >
                    Guardar
                </Button>
            </Container>
        </>
    )
}
