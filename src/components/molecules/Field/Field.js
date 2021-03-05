import React from 'react'
import styled from 'styled-components'
import InputField from '../../atoms/InputField'
import Label from '../../atoms/Label/Label'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const Field = () => (
  <Wrapper>
    <Label>Teste</Label>
    <InputField />
  </Wrapper>
)

export default Field
