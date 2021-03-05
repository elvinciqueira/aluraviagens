import React from 'react'
import {Grid} from '../../atoms/Grid'
import {Box} from '../../atoms/Box'
import Field from '../../molecules/Field'
import Text from '../../atoms/Text/Text'

function FormContent() {
  return (
    <form>
      <section>
        <Text as={'h2'}>Quando será a viagem?</Text>
        <Grid.Row>
          <Grid.Col>
            <Field />
          </Grid.Col>
          <Grid.Col>
            <Field />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col>
            <Field />
          </Grid.Col>
          <Grid.Col>
            <Field />
          </Grid.Col>
        </Grid.Row>
      </section>
    </form>
  )
}

export default function FormCadastro() {
  return <FormContent />
}
