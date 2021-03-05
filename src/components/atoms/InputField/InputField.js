import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors.primary.light.color};
  margin-top: 8px;
  padding: 12px 16px;
  border-radius: 10px;
`

const InputField = () => <StyledInput type="text" placeholder="teste" />

export default InputField
