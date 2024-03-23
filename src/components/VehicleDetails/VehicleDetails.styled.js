import styled from "styled-components";

export const Title = styled.h4`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */

  &::after {
    content: "";
    display: block;

    height: 1px;
    width: 100%;
    background: rgba(16, 24, 40, 0.1);

    margin: 24px auto;
  }
`;

export const MainContainer = styled.div`
  max-width: 430px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;
