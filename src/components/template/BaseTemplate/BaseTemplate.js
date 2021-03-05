import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  justify-content: center;
  margin: 0 auto;
  flex: 1;
  min-height: 100vh;
  padding: 45px 16px;
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
