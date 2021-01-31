import React from "react";
import { render, screen } from "@testing-library/react";
import Paragraph from "./";
import Theme from "styles/Theme";
import { ThemeProvider } from "styled-components";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum leo tempor dui commodo varius. Duis diam dui, pharetra a mauris sit amet, laoreet cursus tellus. Praesent nunc neque, lacinia eget leo ac, luctus mattis dolor. In in augue porttitor ipsum accumsan consectetur. Phasellus quis sapien sit amet urna fermentum tincidunt non vel lacus. Suspendisse tincidunt porttitor lectus nec blandit. Phasellus lacinia a quam vitae lobortis. Cras vestibulum, sapien non consequat scelerisque, leo libero tempor turpis, vel efficitur dui ex quis neque. Morbi in augue eu velit varius fermentum. Praesent facilisis lectus a dui hendrerit, vel accumsan massa dignissim. Donec non auctor eros. Vestibulum scelerisque quis erat sit amet auctor. Maecenas faucibus diam quam, quis rhoncus nulla porttitor non. Quisque viverra ligula sit amet elit condimentum lacinia.";

describe("<Paragraph /> @core/commons/Paragraph", () => {
  it("Should render component", () => {
    const { container } = createComponent();
    expect(container).toBeInTheDocument();
  });
  it("Should render paragraph text", () => {
    createComponent(TEXT);
    const paragraph = screen.getByText(TEXT);
    expect(paragraph).toBeInTheDocument();
  });
  it("Should paragraph style equal to defined", () => {
    createComponent(TEXT);
    const paragraph = screen.getByText(TEXT);
    expect(paragraph).toHaveStyle({
      fontSize: Theme.global.FontSize.xs,
      lineHeight: Theme.global.LineHeight.distant,
      fontFamily: Theme.brand.FontFamily.highlight,
      fontWeight: Theme.brand.FontWeight.regular,
      color: Theme.brand.Color.neutral[1],
    });
  });
});

function createComponent(text = "") {
  return render(
    <ThemeProvider theme={Theme}>
      <Paragraph>{text}</Paragraph>
    </ThemeProvider>
  );
}
