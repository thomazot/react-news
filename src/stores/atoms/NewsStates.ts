import { atom } from "recoil";
import INews from "typings/INews";

const URL =
  "http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=";

const NewsStates = atom<INews>({
  key: "@NEWS_STATES",
  default: {
    status: "ok",
    totalResult: 0,
    articles: [],
  },
  effects_UNSTABLE: [
    ({ setSelf }) => {
      fetch(`${URL}${process.env.REACT_APP_GNEWS}`)
        .then((data) => data.json())
        .then((data) => setSelf(data));
    },
  ],
});

export default NewsStates;
