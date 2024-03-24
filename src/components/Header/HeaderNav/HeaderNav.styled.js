import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;

  max-width: 1440px;
  margin: 0 auto;
  padding-left: 64px;
  padding-right: 64px;
`;

export const Item = styled.li`
  color: #101828;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;
