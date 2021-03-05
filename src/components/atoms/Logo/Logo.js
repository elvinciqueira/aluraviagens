import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  font-family: 'Pattaya', sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 4.5rem;
  margin-top: 0;
  color: ${({theme}) => theme.colors.primary.main.color};
`

const Logo = () => <Text>Alura Viagens</Text>

export default Logo
