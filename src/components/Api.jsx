import React, { useState } from 'react';
import './API.css'; 

const Translator = () => {
  const [inputTextRuToEn, setInputTextRuToEn] = useState('');
  const [translationRuToEn, setTranslationRuToEn] = useState('');

  const [inputTextEnToRu, setInputTextEnToRu] = useState('');
  const [translationEnToRu, setTranslationEnToRu] = useState('');

  const translateText = async (sourceLanguage, targetLanguage, text, setTranslationFunction) => {
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7f71cc74c9msheb445572eb028dbp1d5920jsnf28323451620',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: sourceLanguage,
        target_language: targetLanguage,
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result); 

      if (result.status === 'success') {
        setTranslationFunction(result.data.translatedText);
      } else {
        console.error(result);
        setTranslationFunction('Ошибка перевода');
      }
    } catch (error) {
      console.error(error);
      setTranslationFunction('Ошибка запроса');
    }
  };

  const handleTranslateRuToEn = () => {
    translateText('ru', 'en', inputTextRuToEn, setTranslationRuToEn);
  };

  const handleTranslateEnToRu = () => {
    translateText('en', 'ru', inputTextEnToRu, setTranslationEnToRu);
  };

  return (
    <div className="translator-container">
      <div className="translation-container">
        <h2>Перевод с русского на английский:</h2>
        <div className="translation-section">
          <label htmlFor="inputTextRuToEn">Русский:</label>
          <input
            type="text"
            id="inputTextRuToEn"
            value={inputTextRuToEn}
            onChange={(e) => setInputTextRuToEn(e.target.value)}
            className="input-style"
          />
          <button onClick={handleTranslateRuToEn} className="button-style">
            Translate
          </button>
          {translationRuToEn ? (
            <div>
              <p className="text-style">Введённый текст: {inputTextRuToEn}</p>
              <p className="text-style">Перевёденный текст: {translationRuToEn}</p>
            </div>
          ) : (
            <p className="text-style">No translation available</p>
          )}
        </div>
      </div>

      <div className="translation-container">
        <h2>Перевод с английского на русский</h2>
        <div className="translation-section">
          <label htmlFor="inputTextEnToRu">Английский:</label>
          <input
            type="text"
            id="inputTextEnToRu"
            value={inputTextEnToRu}
            onChange={(e) => setInputTextEnToRu(e.target.value)}
            className="input-style"
          />
          <button onClick={handleTranslateEnToRu} className="button-style">
            Translate
          </button>
          {translationEnToRu ? (
            <div>
              <p className="text-style">Введённый текст: {inputTextEnToRu}</p>
              <p className="text-style">Перевёденный текст: {translationEnToRu}</p>
            </div>
          ) : (
            <p className="text-style">No translation available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;












