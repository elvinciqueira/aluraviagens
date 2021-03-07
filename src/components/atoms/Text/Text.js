import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'lodash/get'

const TextBase = styled.span`
  font-family: ${({theme}) => theme.fontFamily};
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({theme, color}) => get(theme, `colors.${color}.color`)};
  margin-bottom: 32px;
`

const Text = ({children, tag, ...rest}) => (
  <TextBase as={tag} {...rest}>
    {children}
  </TextBase>
)

Text.defaultProps = {
  tag: 'span',
  children: null,
}

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
}

export default Text
