import React from "react";
import Heading from "core/commons/Heading";
import Subtitle from "core/commons/Subtitle";
import Paragraph from "core/commons/Paragraph";
import Shape from "core/commons/Shape";
import styled from "styled-components";

export type ICard = {
  heading: string;
  subtitle: string;
  description: string;
};

const CardHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.global.SpacingStack.xxxs};
`;

const CardSubtitle = styled(Subtitle)`
  margin-bottom: ${({ theme }) => theme.global.SpacingStack.xxs};
`;

const CardParagraph = styled(Paragraph)`
  margin-bottom: ${({ theme }) => theme.global.SpacingStack.sm};
`;

const Card = ({ heading, subtitle, description }: ICard) => {
  return (
    <Shape>
      <CardHeading>{heading}</CardHeading>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardParagraph>{description}</CardParagraph>
    </Shape>
  );
};

export default Card;
