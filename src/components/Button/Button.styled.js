import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[4]}px auto;
  border-radius: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.bgColor};
  color: ${p => p.theme.colors.colorTextButton};
  border: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  cursor: pointer;
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.bgColorHover};
  }
`;
