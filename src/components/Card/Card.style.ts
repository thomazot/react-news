import Heading from "core/commons/Heading";
import Subtitle from "core/commons/Subtitle";
import Paragraph from "core/commons/Paragraph";
import Shape from "core/commons/Shape";
import styled from "styled-components";
import Button from "core/commons/Button";

export const CardShape = styled(Shape)`
  && {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const CardHeading = styled(Heading)`
  && {
    margin-bottom: ${({ theme }) => theme.global.SpacingStack.xxxs};
  }
`;

export const CardSubtitle = styled(Subtitle)`
  && {
    margin-bottom: ${({ theme }) => theme.global.SpacingStack.xxs};
  }
`;

export const CardParagraph = styled(Paragraph)`
  && {
    margin-bottom: ${({ theme }) => theme.global.SpacingStack.sm};
  }
`;

export const CardButton = styled(Button)`
  && {
    margin-top: auto;
  }
`;
