import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Card from "./";
import { ICard } from "./Card";

const PROPS_MOCK = {
  heading: "Heading SM",
  subtitle: "Subtitle SM",
  description: "Lorem Ipsum is simply dummy test of the printing",
};

describe("<Card /> Components", () => {
  it("Should render component", () => {
    const { container } = createComponent(PROPS_MOCK);
    expect(container).toBeInTheDocument();
  });
  it("Should render Heading and Subtitle and Description", () => {
    createComponent(PROPS_MOCK);

    const heading = screen.getByRole("heading", { name: PROPS_MOCK.heading });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByRole("heading", { name: PROPS_MOCK.subtitle });
    expect(subtitle).toBeInTheDocument();

    const description = screen.getByText(PROPS_MOCK.description);
    expect(description).toBeInTheDocument();
  });
  it("Should Card style equal to defined", () => {
    createComponent(PROPS_MOCK);

    const heading = screen.getByRole("heading", { name: PROPS_MOCK.heading });
    expect(heading).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.xxxs,
    });

    const subtitle = screen.getByRole("heading", { name: PROPS_MOCK.subtitle });
    expect(subtitle).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.xxs,
    });

    const description = screen.getByText(PROPS_MOCK.description);
    expect(description).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.sm,
    });
  });
});

function createComponent(props: ICard) {
  return render(
    <ThemeProvider theme={Theme}>
      <Card
        heading={props.heading}
        subtitle={props.subtitle}
        description={props.description}
      />
    </ThemeProvider>
  );
}
