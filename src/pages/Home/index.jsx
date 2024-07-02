import { useRef } from "react"
import api from "../../services/api"

import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackGround } from "./styles"

import UsersImage from "../../assets/users.png"

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    await api.post("/usuarios",{
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

  }
  
  return (

    <Container>
      <TopBackGround>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackGround>

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>


          <div>
            <InputLabel>
              Nome<span> *</span>
              <Input type="text" placeholder="Nome Do Usuário" ref={inputName} />
            </InputLabel>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input typeof="number" placeholder="Idade Do Usuáro" ref={inputAge} />

          </div>

        </ContainerInputs>
        <div style={{width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>


        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>

    </Container>
  )
}

export default Home
