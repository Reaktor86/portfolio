import { dictionary } from "./dictionary";
import { EPronouns, ESentenceTypes, ESentenceTypesRussian, ETimes, ETimesRussian } from "./enums";
import { ITemplateResult } from "./types";
import _ from 'lodash';

export const getRandomFromArray = <T>(arr: T[]): T => {
  const num = _.random(0, arr.length - 1);
  console.log('генерация', { length: arr.length, num });
  return arr[num];
}

export const getSequence = (): number[] => {
  const arr = _.range(9);
  return _.shuffle(arr);
}

export const getTemplate = (sequence: number, word: string): ITemplateResult => {
  const pronoun = getRandomFromArray(Object.values(EPronouns));
  const wordPast = dictionary[word]?.past || word;
  const wordHeShe = dictionary[word]?.heShe || word;
  const isHeShe = pronoun === EPronouns.HE || pronoun === EPronouns.SHE ? true : false;

  console.log({pronoun, isHeShe});

  let result: ITemplateResult;

  switch (sequence) {
    case 0: {
      result = {
        sentenceType: ESentenceTypes.QUESTION,
        time: ETimes.FUTURE,
        str: `Will ${pronoun} ${word}?`,
        pronoun,
      }
      break;
    }
    case 1: {
      result = {
        sentenceType: ESentenceTypes.QUESTION,
        time: ETimes.PRESENT,
        str: `${isHeShe ? "Does" : "Do"} ${pronoun} ${word}?`,
        pronoun,
      }
      break;
    }
    case 2: {
      result = {
        sentenceType: ESentenceTypes.QUESTION,
        time: ETimes.PAST,
        str: `${isHeShe ? "Does" : "Do"} ${pronoun} ${word}?`,
        pronoun,
      }
      break;
    }
    case 3: {
      result = {
        sentenceType: ESentenceTypes.STATEMENT,
        time: ETimes.FUTURE,
        str: `${pronoun} will ${word}`,
        pronoun,
      }
      break;
    }
    case 4: {
      result = {
        sentenceType: ESentenceTypes.STATEMENT,
        time: ETimes.PRESENT,
        str: `${pronoun} ${isHeShe ? wordHeShe : word}`,
        pronoun,
      }
      break;
    }
    case 5: {
      result = {
        sentenceType: ESentenceTypes.STATEMENT,
        time: ETimes.PAST,
        str: `${pronoun} ${wordPast}`,
        pronoun,
      }
      break;
    }
    case 6: {
      result = {
        sentenceType: ESentenceTypes.NEGATION,
        time: ETimes.FUTURE,
        str: `${pronoun} will not ${word}`,
        pronoun,
      }
      break;
    }
    case 7: {
      result = {
        sentenceType: ESentenceTypes.NEGATION,
        time: ETimes.PRESENT,
        str: `${pronoun} ${isHeShe ? "doesn't" : "don't"} ${word}`,
        pronoun,
      }
      break;
    }
    default: {
      result = {
        sentenceType: ESentenceTypes.NEGATION,
        time: ETimes.PAST,
        str: `${pronoun} did not ${word}`,
        pronoun,
      }
      break;
    }
  }

  return {
    ...result,
    str: result.str[0] + result.str.substring(1),
  }
}

export const getTranslate = (type: ETimes | ESentenceTypes): ETimesRussian | ESentenceTypesRussian => {
  switch (type) {
    case ETimes.PRESENT:
      return ETimesRussian.PRESENT;
    case ETimes.FUTURE:
      return ETimesRussian.FUTURE;
    case ETimes.PAST:
      return ETimesRussian.PAST;
    case ESentenceTypes.QUESTION:
      return ESentenceTypesRussian.QUESTION;
    case ESentenceTypes.NEGATION:
      return ESentenceTypesRussian.NEGATION;
    default:
      return ESentenceTypesRussian.STATEMENT;
  }
}