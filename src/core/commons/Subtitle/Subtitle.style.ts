import styled, { css } from "styled-components";

const SubtitleSmall = css`
  font-size: ${({ theme }) => theme.global.FontSize.md};
  line-height: ${({ theme }) => theme.global.LineHeight.medium};
  font-family: ${({ theme }) => theme.brand.FontFamily.highlight};
  font-weight: ${({ theme }) => theme.brand.FontWeight.medium};
  color: ${({ theme }) => theme.brand.Color.neutral[1]};
`;

export type ISubtitle = {
  size: "small";
};

export const Subtitle = styled.h3<ISubtitle>`
  margin: 0;
  ${({ size }) => size === "small" && SubtitleSmall}
`;
