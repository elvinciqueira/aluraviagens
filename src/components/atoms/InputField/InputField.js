import React, {useEffect, useRef, useState} from 'react'
import {useField} from '@unform/core'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid ${({theme}) => theme.colors.primary.light.color};
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 10px;
`

const InputField = ({name, type, ...rest}) => {
  const {fieldName, registerField, defaultValue} = useField(name)
  const inputRef = useRef(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearVlue: (ref) => (ref.current.value = ''),
    })
  }, [fieldName, registerField])

  return (
    <StyledInput
      name={name}
      type={type}
      ref={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  )
}

export default InputField
