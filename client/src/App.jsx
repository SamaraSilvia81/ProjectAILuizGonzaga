import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/processar_texto', { texto });
      setResultado(response.data.resultado);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Insira um texto</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={texto} onChange={(e) => setTexto(e.target.value)} rows={4} />
        <button type="submit">Enviar</button>
      </form>
      {resultado && (
        <div className="resultado">
          <h3>Resultado:</h3>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default App;