import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: ${p => p.theme.space[0]}px;
  left: ${p => p.theme.space[0]}px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalBox = styled.div`
  max-width: 70vw;
  max-height: 100vh;
`;
