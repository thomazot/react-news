import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Subtitle from "./";

describe("<Subtitle /> @core/commons/Subtitle", () => {
  it("Should render component", () => {
    const { container } = createComponent();
    expect(container).toBeInTheDocument();
  });
  it("Should render role subtitle", () => {
    createComponent("Subtitle SM");
    const subtitle = screen.getByRole("heading", { name: /subtitle sm/i });
    expect(subtitle).toBeInTheDocument();
  });
  it("Should Heading style equal with defined", () => {
    createComponent("Subtitle SM");

    const subtitle = screen.getByRole("heading", { name: /subtitle sm/i });

    expect(subtitle).toHaveStyle({
      fontSize: Theme.global.FontSize.md,
      lineHeight: Theme.global.LineHeight.medium,
      fontFamily: Theme.brand.FontFamily.highlight,
      fontWeight: Theme.brand.FontWeight.medium,
      color: Theme.brand.Color.neutral[1],
    });
  });
});

function createComponent(title = "") {
  return render(
    <ThemeProvider theme={Theme}>
      <Subtitle>{title}</Subtitle>
    </ThemeProvider>
  );
}
