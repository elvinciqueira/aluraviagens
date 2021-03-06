import React from 'react'
import {Form} from '@unform/web'

import {Grid} from '../../atoms/Grid'
import Field from '../../molecules/Field'
import Text from '../../atoms/Text/Text'

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
        </Grid.Row>
      </section>

      <button type="submit">Enviar</button>
    </Form>
  )
}

export default function FormCadastro() {
  return <FormContent />
}
