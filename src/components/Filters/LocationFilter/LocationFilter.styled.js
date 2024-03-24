import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: block;

  color: rgba(16, 24, 40, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */

  margin-bottom: 8px;
`;

export const Input = styled.input`
  display: block;

  border-radius: 10px;
  background: #f7f7f7;
  border: none;

  width: 360px;
  padding: 18px;
`;
