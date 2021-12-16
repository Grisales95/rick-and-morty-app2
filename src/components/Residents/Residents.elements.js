import styled from "styled-components";

export const ResidentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleResidents = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin: 20px 0;
  text-align: center;
`;

export const ResidentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const ShowMore = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.5s;
  margin: 15px 0;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const NoResidentText = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-top: 20px;
`;

export const ImgNoResidents = styled.img`
  margin-top: -15px;
  width: 300px;
`;
