import styled from "styled-components";

export const SwitchStyled = styled.div`
  background: ${({ theme }) => theme.bg_card};
  border-radius: 12px;
  cursor: pointer;
  margin: 10px;
  padding: 10.5px;
  position: absolute;
  right: 0;
  transition: all 0.5s;
  width: 40px;

  @media (max-width: 500px) {
    right: -20px;
    top: -8px;
  }
`;

export const SwitchBall = styled.div`
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  cursor: pointer;
  height: 15px;
  position: absolute;
  top: 3px;
  transition: all 0.3s;
  width: 15px;
`;
