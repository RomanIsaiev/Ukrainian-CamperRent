import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(17, 18, 19, 0.4);
  z-index: 1200;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;

  padding: 40px 16px 40px 40px;

  max-width: 982px;
  width: 100%;

  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: #fff;
  border: none;
  overflow: hidden;
`;
