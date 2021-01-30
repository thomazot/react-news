import styled, { css } from "styled-components";

const buttonPrimary = css`
  font-size: ${({ theme }) => theme.global.FontSize.sm};
  line-height: ${({ theme }) => theme.global.LineHeight.tight};
  border-radius: ${({ theme }) => theme.global.BorderRadius.none};
  padding: ${({ theme }) => theme.global.SpacingSquish.xs};

  font-family: ${({ theme }) => theme.brand.FontFamily.highlight};
  font-weight: ${({ theme }) => theme.brand.FontWeight.medium};
  color: ${({ theme }) => theme.brand.Color.neutral[4]};
  background-color: ${({ theme }) => theme.brand.Color.primary[2]};

  &[aria-pressed="true"] {
    background-color: ${({ theme }) => theme.brand.Color.primary[1]};
  }
`;

type IButton = {
  primary: boolean;
};

export const Button = styled.button<IButton>`
  appearance: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ primary }) => {
    return primary && buttonPrimary;
  }}
`;
