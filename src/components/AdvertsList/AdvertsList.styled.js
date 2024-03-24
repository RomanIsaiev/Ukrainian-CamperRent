import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 50px;
`;

export const LoadButton = styled.button`
  display: block;
  margin: 0 auto;

  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  padding: 16px;

  max-width: 145px;
  width: 100%;

  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
`;
