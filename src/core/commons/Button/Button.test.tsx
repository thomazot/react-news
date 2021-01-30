/**
 * Button
 * Ao criar o test verifiquei que o metodo useEvent.hover existe um problema que ao criar o test nào consigo pegar
 * a propriedade de hover, então utilizei o aria-pressed para identificar a mudança de estado hover
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";

describe("<Button /> @libs/commons/button", () => {
  it("Should render component", () => {
    const { container } = createComponent();
    expect(container).toBeInTheDocument();
  });
  it("Should data-color to be primary", () => {
    createComponent("confirm");
    const button = screen.getByRole("button", { name: /confirm/i });
    expect(button).toBeInTheDocument();
  });
  it("Should to contain attribute data-color equal primary", () => {
    createComponent("confirm");
    const button = screen.getByRole("button", { name: /confirm/i });
    expect(button.getAttribute("data-color")).toBe("primary");
  });
  it("Should button style equal with defined", async () => {
    createComponent("confirm");

    const button = screen.getByRole("button", { name: /confirm/i });

    expect(button).toHaveStyle({
      fontSize: Theme.global.FontSize.sm,
      lineHeight: Theme.global.LineHeight.tight,
      borderRadius: Theme.global.BorderRadius.none,
      padding: Theme.global.SpacingSquish.xs,
      fontFamily: Theme.brand.FontFamily.highlight,
      fontWeight: Theme.brand.FontWeight.medium,
      color: Theme.brand.Color.neutral[4],
      backgroundColor: Theme.brand.Color.primary[2],
    });

    expect(button.getAttribute("aria-pressed")).toBe("false");
    userEvent.hover(button);
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(button).toHaveStyle({
      backgroundColor: Theme.brand.Color.primary[1],
    });
    userEvent.unhover(button);
    expect(button.getAttribute("aria-pressed")).toBe("false");
    expect(button).toHaveStyle({
      backgroundColor: Theme.brand.Color.primary[2],
    });
  });
});

function createComponent(name = "") {
  return render(
    <ThemeProvider theme={Theme}>
      <Button>{name}</Button>
    </ThemeProvider>
  );
}
