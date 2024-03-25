import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;

  &::before {
    content: "";
    display: block;

    height: 1px;
    width: 360px;

    background: rgba(16, 24, 40, 0.1);

    margin: 24px 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 95px;
  width: 112px;

  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;

  cursor: pointer;

  &.activeFilter {
    border: 2px solid #e44848;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: #101010;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
`;

export const Title = styled.h4`
  color: #101828;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;
