import React from 'react'
import styled from 'styled-components'
import {Form} from '@unform/web'

import {Grid} from '../../atoms/Grid'
import Field from '../../molecules/Field'
import Text from '../../atoms/Text/Text'
import Button from '../../atoms/Button'

const RadioButton = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  list-style: none;
  border: 1px solid ${({theme}) => theme.colors.primary.light.color};
  border-radius: ${({theme}) => theme.borderRadius};
  list-style: none;
  box-sizing: border-box;

  li {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;
  }

  li:first-child {
    border-right: 1px solid ${({theme}) => theme.colors.primary.light.color};
  }

  li:last-child {
    border-left: 1px solid ${({theme}) => theme.colors.primary.light.color};
  }

  span {
    color: #404040;
  }
`

function FormContent() {
  const formRef = React.useRef(null)

  const handleSubmit = (data) => {
    console.log('data', data)
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <section>
        <Text as={'h2'}>Quando será a viagem?</Text>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="startDate" label="Data de saída" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="returnDate" label="Data de retorno" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="returnDate" label="Local de Origem" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="returnDate" label="Local de Chegada" />
          </Grid.Col>
        </Grid.Row>
      </section>

      <section>
        <Text as={'h2'}>Como será o pagamento?</Text>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <RadioButton>
              <li>
                <img src="icons/transferencia.svg" alt="Icone" />
                <span>Transferência</span>
              </li>
              <li>
                <img src="icons/cartao.svg" alt="Icone" />
                <span>Cartão</span>
              </li>
              <li>
                <img src="icons/paypal.svg" alt="Icone" />
                <span>Paypal</span>
              </li>
            </RadioButton>
          </Grid.Col>
        </Grid.Row>
      </section>

      <Button type="submit">Comprar</Button>
    </Form>
  )
}

export default function FormCadastro() {
  return <FormContent />
}
