import React, { useState } from 'react';
import { createMusic } from '../backend/api'
import { BiRightArrow } from 'react-icons/bi';
import styles from "./Home.module.css";

function Home() {
  
  const [inputText, setInputText] = useState('');
  const [inputCount, setInputCount] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [sendingData, setSendingData] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputCountChange = (event) => {
    setInputCount(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSendingData(true);
  
      const response = await createMusic(inputText, inputCount);
  
      if (response) {
        const responseData = response; // Acessar o objeto retornado pelo backend
        setGeneratedText(responseData); // Atualizar o estado com o texto retornado
      } else {
        console.error('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSendingData(false);
    }
  };
  
  

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerInput}>
          <input
            id="input"
            placeholder="Digite palavras para iniciar sua canção"
            value={inputText}
            onChange={handleInputChange}
          />
          <input
            placeholder="Digite a quantidade de caracteres que você quer"
            type="number"
            value={inputCount}
            onChange={handleInputCountChange}
          />
          <button id="btnPlus" onClick={handleSubmit}>
            <BiRightArrow/>
          </button>
        </div>

        <div className={styles.aiResponse}>
          {sendingData ? (
            <div className={styles.message}>Sending data to AI...</div>
          ) : (
            <p>{generatedText}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;