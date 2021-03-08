import React from 'react'
import styled from 'styled-components'

const ListBox = styled.ul`
  margin: 0;
  padding: 0;
  z-index: 1;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.25);

  li[data-focus='true'] {
    background-color: '#4a8df6';
    color: white;
    cursor: pointer;
  }

  li:active {
    background-color: #2977f5;
    color: white;
  }
`

const AutoComplete = ({onChange, renderInput, options}) => {
  return (
    <div>
      {renderInput({onChange})}
      <ListBox>
        {options.map(({text, value}) => (
          <li key={value}>{text}</li>
        ))}
      </ListBox>
    </div>
  )
}

export default AutoComplete
