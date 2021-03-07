import React from 'react'
import {Form} from '@unform/web'

import {Grid} from '../../atoms/Grid'
import Field from '../../molecules/Field'
import Text from '../../atoms/Text/Text'
import Button from '../../atoms/Button'
import RadioButton from '../../molecules/RadioButton'
import * as Yup from 'yup'

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

  const handleSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        nome: Yup.string('Digite um nome válido').required(
          'Nome é obrigatório',
        ),
      })
      await schema.validate(data, {
        abortEarly: false,
      })
      // Validation passed
      console.log(data)
    } catch (err) {
      const validationErrors = {}

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        formRef.current.setErrors(validationErrors)
      }
    }
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
            <Field type="text" name="dataSaida" label="Data de saída" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="dataRetorno" label="Data de retorno" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="localOrigem" label="Local de Origem" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="localChegada" label="Local de Chegada" />
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

      <section>
        <Text as={'h2'} color="tertiary.main">
          Quem vai viajar?
        </Text>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 12, lg: 12}}>
            <Field type="text" name="nome" label="Nome" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 12, lg: 12}}>
            <Field type="text" name="sobrenome" label="Sobrenome" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field type="text" name="páis" label="País de residência" />
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6, lg: 6}}>
            <Field
              mask="99/99/9999"
              type="text"
              name="dataNascimento"
              label="Data de Nascimento"
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 12, lg: 12}}>
            <Field mask="999.999.999-99" type="text" name="cpf" label="CPF" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 12, lg: 12}}>
            <Field type="email" name="email" label="E-mail" />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={{xs: 12, md: 12, lg: 12}}>
            <Field
              mask="(99) 99999-9999"
              type="text"
              name="telefone"
              label="Telefone"
            />
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
