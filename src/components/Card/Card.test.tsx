import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import Card from "./";
import { ICard } from "./Card";

const PROPS_MOCK: ICard = {
  article: {
    title: "Heading",
    description: "Subtitle",
    content: "Paragraph",
    author: "Author",
    publishdAt: "publishAt",
    url: "url",
    urlToImage: "urlToImage",
    source: {
      id: "id",
      name: "name",
    },
  },
};

describe("<Card /> Components", () => {
  it("Should render component", () => {
    const { container } = createComponent(PROPS_MOCK);
    expect(container).toBeInTheDocument();
  });
  it("Should render Heading and Subtitle and Description", () => {
    createComponent(PROPS_MOCK);

    const heading = screen.getByRole("heading", {
      name: PROPS_MOCK.article.title,
    });
    expect(heading).toBeInTheDocument();

    const subtitle = screen.getByRole("heading", {
      name: PROPS_MOCK.article.description,
    });
    expect(subtitle).toBeInTheDocument();

    const description = screen.getByText(PROPS_MOCK.article.content);
    expect(description).toBeInTheDocument();
  });
  it("Should Card style equal to defined", () => {
    const { container } = createComponent(PROPS_MOCK);

    const heading = screen.getByRole("heading", {
      name: PROPS_MOCK.article.title,
    });
    expect(heading).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.xxxs,
    });

    const subtitle = screen.getByRole("heading", {
      name: PROPS_MOCK.article.description,
    });
    expect(subtitle).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.xxs,
    });

    const description = screen.getByText(PROPS_MOCK.article.content);
    expect(description).toHaveStyle({
      "margin-bottom": Theme.global.SpacingStack.sm,
    });

    const button = screen.getByRole("button", { name: /ver mais/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    expect(container).toBeInTheDocument();
  });
  it("Should click button see more exec onActions", () => {
    const onActions = jest.fn();
    createComponent({ ...PROPS_MOCK, onActions });
    const button = screen.getByRole("button", { name: /ver mais/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(onActions).toHaveBeenCalled();
  });
});

function createComponent(props: ICard) {
  return render(
    <ThemeProvider theme={Theme}>
      <Card {...props} />
    </ThemeProvider>
  );
}
