import styled from "styled-components";

export const HeaderBg = styled.header`
  background-color: #24282f;
  height: 100px;
  padding: 7px 0;
  width: 100%;

  @media (max-width: 425px) {
    height: 80px;
    padding: 5px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  width: 85%;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  max-height: 95px;
  margin-top: -7px;
  @media (max-width: 425px) {
    max-height: 80px;
  }
`;
