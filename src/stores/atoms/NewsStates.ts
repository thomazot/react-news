import { atom } from "recoil";
import INews from "typings/INews";

const URL = "https://zotnewapi.herokuapp.com/";

const NewsStates = atom<INews>({
  key: "@NEWS_STATES",
  default: {
    status: "ok",
    totalResult: 0,
    articles: [],
  },
  effects_UNSTABLE: [
    ({ setSelf }) => {
      fetch(`${URL}`)
        .then((data) => data.json())
        .then((data) => setSelf(data));
    },
  ],
});

export default NewsStates;
