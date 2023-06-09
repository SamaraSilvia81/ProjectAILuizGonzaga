import React, { useState } from 'react';
import { createMusic } from '../backend/api'
import { BiRightArrow } from 'react-icons/bi';
import styles from "./Home.module.css";

function Home() {
  
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [sendingData, setSendingData] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSendingData(true);
  
      const response = await createMusic(inputText);
  
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
            placeholder="Type a Theme of music or a phrase"
            value={inputText}
            onChange={handleInputChange}
          />
          <button id="btnPlus" className={styles.plusButton} onClick={handleSubmit}>
            <BiRightArrow className={styles.plusIcon} />
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