import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 448px;
  height: 100%;

  padding: 24px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const FormTitle = styled.h3`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */

  margin-bottom: 8px;
`;

export const SubTitle = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  margin-bottom: 24px;
`;

//

export const Input = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;
  padding: 18px;

  margin-bottom: 14px;
`;

export const TextAria = styled.textarea`
  width: 400px;
  height: 114px;
  resize: none;
  padding: 18px;
  border: none;
  border-radius: 10px;
  background: #f7f7f7;

  margin-bottom: 24px;
`;

export const Data = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  background: #f7f7f7;
  border: none;
  padding: 18px;

  margin-bottom: 14px;
  color: rgba(16, 24, 40, 0.6);
`;

export const Submit = styled.input`
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  border-radius: 200px;
  background: #e44848;
  border: none;

  max-width: 160px;
  height: 56px;

  padding: 16px 60px;

  cursor: pointer;

  &:hover {
    background: #d84343;
  }
`;

export const Span = styled.span`
  color: #e44848;
`;
