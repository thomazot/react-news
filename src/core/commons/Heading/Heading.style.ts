import styled, { css } from "styled-components";

const HeadingSmall = css`
  font-size: ${({ theme }) => theme.global.FontSize.lg};
  line-height: ${({ theme }) => theme.global.LineHeight.distant};
  font-family: ${({ theme }) => theme.brand.FontFamily.highlight};
  font-weight: ${({ theme }) => theme.brand.FontWeight.bold};
  color: ${({ theme }) => theme.brand.Color.neutral[0]};
`;

export type IHeading = {
  size: "small";
};

export const Heading = styled.h1<IHeading>`
  margin: 0;
  ${({ size }) => size === "small" && HeadingSmall}
`;
