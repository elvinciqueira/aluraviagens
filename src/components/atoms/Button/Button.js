import styled, {css} from 'styled-components'
import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'

const styles = css`
  border: none;
  font-weight: 600;
  background-color: ${({theme}) => theme.colors.primary.main.color};
  color: ${({theme}) => theme.colors.secondary.main.color};
  border-radius: ${({theme}) => theme.borderRadius};

  ${breakPointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 145px;
    `,
  })}

  height: 48px;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

const StyledButton = styled.button`
  ${styles}
`

export default StyledButton
