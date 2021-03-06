import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.tertiary.main.color};
`

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Label
