import { EPronouns, ESentenceTypes, ETimes } from "./enums";

export interface IDictionary {
  [key: string]: {
    past: string;
    heShe: string;
    rus: string;
  }
}

export interface ITemplateResult {
  sentenceType: ESentenceTypes;
  time: ETimes;
  str: string;
  pronoun: EPronouns;
}