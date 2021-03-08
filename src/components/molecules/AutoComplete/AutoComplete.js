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

  option {
    cursor: pointer;
  }

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
  const [value, setValue] = React.useState('')

  const handleOnChange = (e) => {
    setValue(e.target.value)

    onChange(e)
  }

  return (
    <div>
      {renderInput({onChange: handleOnChange, value})}
      <ListBox>
        {options.map(({text, value}) => (
          <li key={value}>
            <option onClick={(e) => setValue(e.target.value)} value={text}>
              {text}
            </option>
          </li>
        ))}
      </ListBox>
    </div>
  )
}

export default AutoComplete
