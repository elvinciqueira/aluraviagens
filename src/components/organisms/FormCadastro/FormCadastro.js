import React from 'react'
import {Form} from '@unform/web'

import {Grid} from '../../atoms/Grid'
import Field from '../../molecules/Field'
import Text from '../../atoms/Text/Text'
import Button from '../../atoms/Button'
import RadioButton from '../../molecules/RadioButton'

const paymentsOptions = {
  1: {
    type: 'Transferência',
    img: 'icons/transferencia.svg',
  },
  2: {
    type: 'Cartão',
    img: 'icons/cartao.svg',
  },
  3: {
    type: 'PayPal',
    img: 'icons/paypal.svg',
  },
}

function FormContent() {
  const formRef = React.useRef(null)
  const [selectedItem, setSelectedItem] = React.useState(null)

  const handleSubmit = (data) => {
    console.log('data', data)
  }

  const handleSelectedItem = (id) => setSelectedItem(id)

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <section>
        <Text as={'h2'} color="tertiary.main">
          Quando será a viagem?
        </Text>
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
        <Text as={'h2'} color="tertiary.main">
          Como será o pagamento?
        </Text>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <RadioButton selectedItem={selectedItem}>
              {Object.keys(paymentsOptions).map((paymentId) => (
                <li
                  key={paymentId}
                  onClick={() => handleSelectedItem(paymentId)}
                >
                  <img
                    src={paymentsOptions[paymentId].img}
                    alt={paymentsOptions[paymentId].type}
                  />
                  <span>{paymentsOptions[paymentId].type}</span>
                </li>
              ))}
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
