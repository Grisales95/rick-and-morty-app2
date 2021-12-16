import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto 30px auto;
  width: 100%;
`;

export const Form = styled.form`
  margin: auto;
  text-align: center;
  width: 70%;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 2px solid #24282f;
  border-radius: 5px;
  color: #24282f;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 10px;
  padding: 5px 10px;
  outline: none;
  width: 80%;
`;

export const Option = styled.option`
  font-size: 1rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  max-width: 60px;
  padding: 5px;
  transition: background-color 0.5s;
  width: 15%;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;
