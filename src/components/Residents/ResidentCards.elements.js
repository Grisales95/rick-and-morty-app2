import styled from "styled-components";

export const CardResident = styled.li`
  background: ${({ theme }) => theme.bg_card};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  margin: 20px 10px;
  transition: all 0.5s;
  width: 30%;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 30%;
    margin: 20px 10px;
  }

  @media (max-width: 800px) {
    width: 42%;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

export const ResidentName = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-top: -5px;
  width: 100%;
`;

export const ResidentImg = styled.img`
  object-fit: cover;
  width: 46%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ResidentInfo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  line-height: 2.5;
  padding: 15px;
`;

export const StatusContainer = styled.p`
  align-items: center;
  display: flex;
`;

export const Status = styled.span`
  background-color: ${(props) =>
    (props.alive && "green") || (props.unknown ? "gray" : "red")};
  border-radius: 50%;
  height: 10px;
  margin-right: 5px;
  width: 10px;
`;
