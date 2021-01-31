import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";

describe("<Heading /> @core/commons/Heading", () => {
  it("Should render component", () => {
    const { container } = createComponent();
    expect(container).toBeInTheDocument();
  });
  it("Should render role title", () => {
    createComponent("Heading SM");
    const title = screen.getByRole("heading", { name: /heading sm/i });
    expect(title).toBeInTheDocument();
  });
  it("Should Heading style equal with defined", () => {
    createComponent("Heading SM");

    const title = screen.getByRole("heading", { name: /heading sm/i });

    expect(title).toHaveStyle({
      "font-family": Theme.brand.FontFamily.highlight,
      // fontSize: Theme.global.FontSize.lg,
      // lineHeight: Theme.global.LineHeight.distant,
      // fontWeight: Theme.brand.FontWeight.bold,
      // color: Theme.brand.Color.neutral[0],
    });
  });
});

function createComponent(title = "") {
  return render(
    <ThemeProvider theme={Theme}>
      <Heading>{title}</Heading>
    </ThemeProvider>
  );
}
