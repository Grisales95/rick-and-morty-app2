import styled from "styled-components";

export const LocationContainer = styled.div`
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.primary};
  margin: 20px 0;
  padding: 10px;
  text-align: left;
  width: 95%;
`;

export const TitleLocation = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin: 10px 0;
`;

export const LocationInfo = styled.p`
  color: ${({ theme }) => theme.primary};
  margin: 5px 0;
`;
