import React, {useEffect, useRef, useState} from 'react'
import {useField} from '@unform/core'
import ReactInputMask from 'react-input-mask'
import styled, {css} from 'styled-components'

const InputWrapper = styled.div`
  border: 1px solid #d5d5d5;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 10px;
  display: flex;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({theme}) => theme.colors.primary.main.color};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${({theme}) => theme.colors.primary.main.color};
    `}
  
    ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: #333;
  }
`

const Error = styled.span`
  font-size: 0.95rem;
  color: #c53030;
`

const InputField = ({name, type, ...rest}) => {
  const {fieldName, registerField, defaultValue, error} = useField(name)
  const inputRef = useRef(null)
  const [isFilled, setIsFilled] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearVlue: (ref) => (ref.current.value = ''),
    })
  }, [fieldName, registerField])

  const handleInputFocus = () => setIsFocused(true)

  const handleInputBlur = () => {
    setIsFocused(false)

    setIsFilled(inputRef?.current.value)
  }

  return (
    <>
      <InputWrapper
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
      >
        <ReactInputMask
          name={name}
          type={type}
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </InputWrapper>

      {error && <Error>{error}</Error>}
    </>
  )
}

export default InputField
