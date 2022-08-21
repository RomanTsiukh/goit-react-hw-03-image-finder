import styled from 'styled-components';

export const SearchbarContainer = styled.header`
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  padding-right: ${p => p.theme.space[7]}px;
  padding-left: ${p => p.theme.space[7]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.bgColor};
  z-index: 1;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  background-color: ${p => p.theme.colors.bgColorForm};
  border-radius: ${p => p.theme.radii.normal};

  display: flex;
  align-items: center;
  width: 100%;
  width: 450px;
`;

export const SearchFormButton = styled.button`
  border: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.bgColorButtonSearch};
  width: 48px;
  height: 48px;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  border: ${p => p.theme.radii.none};
  display: inline-block;

  width: 100%;
  outline: none;

  ::placeholder {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
