import React from 'react'
import styled, {css} from 'styled-components'

import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'

const Text = styled.h1`
  font-family: 'Pattaya', sans-serif;
  font-weight: 400;
  text-align: left;
  ${breakPointsMedia({
    xs: css`
      font-size: 1.75rem;
    `,
    md: css`
      font-size: 4.5rem;
    `,
  })}
  margin-top: 0;
  color: ${({theme}) => theme.colors.primary.main.color};
`

const Logo = () => <Text>Alura Viagens</Text>

export default Logo
