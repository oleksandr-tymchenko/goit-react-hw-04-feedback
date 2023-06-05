import styled from '@emotion/styled';

export const FeedbackCont = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.small}; */
`;

export const Btn = styled.button`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  padding: 7px 20px;
  gap: 20px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  margin-right: 10px;

  &:hover {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.accent};
  }
`;
