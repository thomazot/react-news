import styled from "styled-components";

export const Shape = styled.article`
  border-radius: ${({ theme }) => theme.global.BorderRadius.none};
  padding: ${({ theme }) => theme.global.SpacingInset.lg};
  border-width: ${({ theme }) => theme.global.BorderWidth.thin};
  border-color: ${({ theme }) => theme.brand.Color.neutral[3]};
  background-color: ${({ theme }) => theme.brand.Color.neutral[4]};
`;
