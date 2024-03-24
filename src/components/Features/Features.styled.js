import styled from "styled-components";

export const MainContainer = styled.div`
  &::before {
    content: "";
    display: block;

    width: 902px;
    height: 1px;

    margin-bottom: 44px;

    background: rgba(16, 24, 40, 0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;
