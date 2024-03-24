import styled from "styled-components";

export const FilledIcon = styled.svg`
  fill: #ffc531;
  stroke: #ffc531;
  width: 16px;
  height: 16px;
`;

export const EmptyIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #f2f4f7;
  stroke: #f2f4f7;
`;

export const Item = styled.li`
  max-width: 430px;
`;

export const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border-radius: 60px;
  background: #f2f4f7;
`;

export const Initial = styled.span`
  color: #e44848;

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;

//

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 16px;
`;

export const NameRateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;

export const Comment = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
