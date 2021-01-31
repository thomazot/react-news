import React from "react";
import { render, screen } from "@testing-library/react";
import Shape from "./";
import Theme from "styles/Theme";
import { ThemeProvider } from "styled-components";

const ComponentMock = () => <div>Component test</div>;

describe("<Shape /> @core/commons/Shape", () => {
  it("Should render component", () => {
    const { container } = createComponent(<ComponentMock />);
    expect(container).toBeInTheDocument();
  });
  it("Should shape render children component", () => {
    createComponent(<ComponentMock />);
    const componentMock = screen.getByText(/component test/i);
    expect(componentMock).toBeInTheDocument();
  });
  it("Should Shape style equal to defined", () => {
    createComponent("Shape");
    const shape = screen.getByTestId("article");
    expect(shape).toBeInTheDocument();
    expect(shape).toHaveStyle({
      borderRadius: Theme.global.BorderRadius.none,
      padding: Theme.global.SpacingInset.lg,
      borderWidth: Theme.global.BorderWidth.thin,
      borderColor: Theme.brand.Color.neutral[3],
      backgroundColor: Theme.brand.Color.neutral[4],
    });
  });
});

function createComponent(Component: React.ReactChild | React.ReactChild[]) {
  return render(
    <ThemeProvider theme={Theme}>
      <Shape>{Component}</Shape>
    </ThemeProvider>
  );
}
