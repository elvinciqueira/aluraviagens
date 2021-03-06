import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputField from '../../atoms/InputField'
import Label from '../../atoms/Label/Label'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const Field = ({name, label, type, ...rest}) => {
  const inputProps = {
    id: name,
    name,
    type,
    ...rest,
  }

  return (
    <Wrapper>
      {label && <Label htmlFor={inputProps.id}>{label}</Label>}
      <InputField {...inputProps} />
    </Wrapper>
  )
}

Field.defaultProps = {
  type: 'text',
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Field
