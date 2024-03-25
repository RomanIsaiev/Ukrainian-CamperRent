import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin-bottom: 32px;
`;

export const Label = styled.label`
  position: relative;

  display: block;

  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
`;

export const Input = styled.input`
  display: block;

  border-radius: 10px;
  background: #f7f7f7;
  border: none;

  width: 360px;
  padding: 18px 18px 18px 44px;

  margin-top: 8px;
`;

export const Icon = styled.svg`
  position: absolute;
  top: 48px;
  left: 18px;

  width: 18px;
  height: 20px;
`;
