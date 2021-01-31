import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { render, waitFor } from "@testing-library/react";
import NewsStates from "./NewsStates";
import { act } from "react-dom/test-utils";

const MockTestAtom = () => {
  const news = useRecoilValue(NewsStates);
  return (
    <ul>
      {news.articles.map((article, index) => (
        <li key={`${index}-${article.source.id}`}>{article.title}</li>
      ))}
    </ul>
  );
};

function createComponent() {
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MockTestAtom />
      </React.Suspense>
    </RecoilRoot>
  );
}

describe("Stores Atom NewsState", () => {
  it("Should call news state", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      status: 200,
      json: async () => ({
        articles: [],
      }),
    } as Response);

    act(() => {
      createComponent();
    });

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  });
});
