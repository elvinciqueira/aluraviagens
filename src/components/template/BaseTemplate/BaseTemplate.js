import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'

const Wrapper = styled.div`
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  min-height: 100vh;
  ${breakPointsMedia({
    xs: css`
      padding: 45px 16px;
    `,
    md: css`
      padding: 45px 85px;
    `,
  })}
  max-width: 900px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({theme}) => theme.colors.secondary.main.color};
`

const BaseTemplate = ({children, header}) => (
  <Wrapper>
    {header}
    {children}
  </Wrapper>
)

BaseTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
}

export default BaseTemplate
