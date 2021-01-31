import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "./";
import { RecoilRoot, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import Theme from "styles/Theme";
import userEvent from "@testing-library/user-event";

jest.mock("recoil", () => ({
  ...(jest.requireActual("recoil") as any),
  useRecoilValue: jest.fn(),
}));

beforeEach(() => {
  (useRecoilValue as jest.Mock).mockImplementation(() => ({
    articles: [
      {
        title: "title",
        description: "description",
        content: "content",
        source: {
          id: "id",
          name: "name",
        },
        link: "link",
        linkToImage: "linkToImage",
      },
    ],
  }));
});

describe("<Home /> pages/Home", () => {
  it("Should render component", async () => {
    const { container } = createComponent();
    expect(container).toBeInTheDocument();
    await waitFor(() => expect(useRecoilValue).toHaveBeenCalledTimes(1));
  });
  it("Should click button see more call window.open", async () => {
    global.open = jest.fn();
    createComponent();
    await waitFor(() => expect(useRecoilValue).toHaveBeenCalledTimes(1));
    const button = screen.getByRole("button", { name: /ver mais/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    await waitFor(() => expect(global.open).toHaveBeenCalled());
  });
});

function createComponent() {
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={Theme}>
          <Home />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  );
}
