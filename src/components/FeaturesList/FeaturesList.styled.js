import styled from "styled-components";

export const ListContainer = styled.div`
  max-width: 430px;
  margin-bottom: 44px;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Item = styled.li`
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;

  padding: 12px;
  max-width: 187px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
