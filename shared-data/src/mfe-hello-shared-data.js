import "./set-public-path";
import { ReplaySubject } from "rxjs";

export const savedData = new ReplaySubject(1);

const cache = {
  saved: "Saved Data",
};
savedData.next(cache);

export function setSavedData(data) {
  cache.saved = data;
  savedData.next(cache);
}
