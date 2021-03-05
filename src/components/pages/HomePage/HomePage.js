import React from 'react'

import BaseTemplate from '../../template/BaseTemplate'
import Header from '../../organisms/Header'
import FormCadastro from '../../organisms/FormCadastro'

const HomePage = () => (
  <BaseTemplate header={<Header />}>
    <FormCadastro />
  </BaseTemplate>
)

export default HomePage
