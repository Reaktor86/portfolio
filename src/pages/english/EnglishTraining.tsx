import React, { useEffect, useState } from 'react';
import { dictionary } from './dictionary';
import { EPronouns, ESentenceTypes, ETimes } from './enums';
import { WrappedEnglishTraining } from './style';
import { ITemplateResult } from './types';
import { getSequence, getTemplate, getTranslate } from './utils';

const templateInitial = {
  sentenceType: ESentenceTypes.QUESTION,
  time: ETimes.FUTURE,
  str: '',
  pronoun: EPronouns.I,
}

const EnglishTraining: React.FC = () => {
  const [word, setWord] = useState<string>('none');
  const [isProcess, setIsProcess] = useState<boolean>(false);
  const [sequence, setSequence] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTemplate, setCurrentTemplate] = useState<ITemplateResult>(templateInitial);

  useEffect(() => {
    if (isProcess) {
      const seq = getSequence();
      console.log('генерация последовательности: ', seq);
      setSequence(seq);
      const template = getTemplate(seq[0], word);
      setCurrentTemplate(template);
    }
  }, [isProcess])

  useEffect(() => {
    const template = getTemplate(sequence[currentIndex], word);
    setCurrentTemplate(template);
  }, [currentIndex])

  return(
    <WrappedEnglishTraining>

      <div className="cont">

        <h2>English Training</h2>

        <span className="word-for-training">Слово для тренировки:</span>

        {
          isProcess ? 
            <>
              <span className="word-selected">{word.toUpperCase()}</span>
              <button className="btn-stop" onClick={() => setIsProcess(false)}>Stop</button>
              <div className="game">
                <p>Постройте <span className="task">{ getTranslate(currentTemplate.sentenceType) }</span> + <span className="task">{ getTranslate(currentTemplate.time) }</span> с местоимением <span className="task">{ currentTemplate.pronoun }</span></p>
              {/* // todo */}
              </div>
            </> :
            <select onChange={(e) => setWord(e.target.value)} value={word}>
            <option value="none">Не выбрано</option>
            {Object.keys(dictionary).map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
        }

        {
          word !== 'none' && !isProcess &&
          <button className="btn-start" onClick={() => setIsProcess(true)}>Start training</button>
        }

      </div>

    </WrappedEnglishTraining>
  );
}

export default EnglishTraining;