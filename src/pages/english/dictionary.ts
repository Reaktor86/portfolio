import { EVerbForms } from "./enums";
import { IDictionary } from "./types";

export const replaceTemplate = [
  // что заменить, чем заменить
  ["do not", "don't"],
  ["does not", "doesn't"],
  ["did not", "didn't"],
  ["'ll ", " will "],
  ["'ll not ", " will not "],
]

export const dictionaryStub: IDictionary = {
  close: {
    id: 1,
    past: "closed",
    heShe: "closes",
    wrong: EVerbForms.REGULAR,
  },
  open: {
    id: 2,
    past: "opened",
    heShe: "opens",
    wrong: EVerbForms.REGULAR,
  },
  see: {
    id: 4,
    past: "saw",
    heShe: "sees",
    wrong: EVerbForms.WRONG,
  },
  love: {
    id: 3,
    past: "loved",
    heShe: "loves",
    wrong: EVerbForms.REGULAR,
  },
}
