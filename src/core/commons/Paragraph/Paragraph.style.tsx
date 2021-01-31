import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.global.FontSize.xs};
  line-height: ${({ theme }) => theme.global.LineHeight.distant};
  font-family: ${({ theme }) => theme.brand.FontFamily.highlight};
  font-weight: ${({ theme }) => theme.brand.FontWeight.regular};
  color: ${({ theme }) => theme.brand.Color.neutral[1]};
`;
