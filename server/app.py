from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.text import tokenizer_from_json

app = Flask(__name__)

# Carregando o modelo treinado e o tokenizador
model = keras.models.load_model('path_para_o_modelo')
with open('path_para_o_tokenizador.json') as f:
    data = json.load(f)
    tokenizer = tokenizer_from_json(data)

@app.route('/api/processar_texto', methods=['POST'])
def processar_texto():
    texto = request.json['texto']
    
    # Pré-processamento do texto (se necessário) usando o tokenizador
    texto_preprocessado = tokenizer.texts_to_sequences([texto])
    
    # Executar a previsão com o modelo treinado
    resultado = model.predict(texto_preprocessado)
    
    # Retornar a resposta em formato JSON
    return jsonify({'resultado': resultado.tolist()})

if __name__ == '__main__':
    app.run(debug=True)