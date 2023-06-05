import styled from '@emotion/styled';

export const SectionCont = styled.section`
  /* width: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};

  box-shadow: ${({ theme }) => theme.shadows.small};
`;
