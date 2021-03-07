import React from 'react'
import styled, {css} from 'styled-components'

const styles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  border: 1px solid ${({theme}) => theme.colors.primary.light.color};
  list-style: none;
  box-sizing: border-box;
  border-radius: ${({theme}) => theme.borderRadius};
  margin-bottom: 32px;

  li {
    display: flex;
    padding: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: #d3eaff;
    }
  }

  li:first-child {
    border-right: 1px solid ${({theme}) => theme.colors.primary.light.color};
  }

  li:last-child {
    border-left: 1px solid ${({theme}) => theme.colors.primary.light.color};
  }

  ${({selectedItem}) => css`
    li:nth-child(${Number(selectedItem)}) {
      background-color: #d3eaff;
    }
  `}

  span {
    color: #404040;
  }
`

const StyledRadioButton = styled.ul`
  ${styles}
`

export default StyledRadioButton
