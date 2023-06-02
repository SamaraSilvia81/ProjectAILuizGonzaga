from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Carregue o modelo
model = load_model('./luizgonzaga_gen_mjr.h5')

# Definição dos dicionários char_to_ind e ind_to_char
train_data = [...]  # Dados de treinamento (lista de caracteres)
unique_chars = sorted(list(set(train_data)))  # Obtenha todos os caracteres únicos e ordene-os
char_to_ind = {char: ind for ind, char in enumerate(unique_chars)}  # Mapeie caracteres para índices
ind_to_char = {ind: char for ind, char in enumerate(unique_chars)}  # Mapeie índices para caracteres

def generate_text(model, start_seed, gen_size=100, temp=1.0):
    '''
    model: Trained Model to Generate Text
    start_seed: Initial Seed text in string form
    gen_size: Number of characters to generate

    Basic idea behind this function is to take in some seed text, format it so
    that it is in the correct shape for our network, then loop the sequence as
    we keep adding our own predicted characters.
    '''

    # Number of characters to generate
    num_generate = gen_size

    # Empty list to hold resulting generated text
    text_generated = list(start_seed)

    # Here batch size == 1
    model.reset_states()

    for i in range(num_generate):
        # Vectorizing current input string
        input_eval = [char_to_ind[char] for char in text_generated]

        # Expand to match batch format shape
        input_eval = tf.expand_dims(input_eval, 0)

        # Generate Predictions
        predictions = model(input_eval)

        # Remove the batch shape dimension
        predictions = tf.squeeze(predictions, 0)

        # Use a categorical distribution to select the next character
        predictions = predictions / temp
        predicted_id = tf.random.categorical(predictions, num_samples=1)[-1,0].numpy()

        # Transform back to character letter
        predicted_char = ind_to_char[predicted_id]

        # Append the predicted character to the generated text
        text_generated.append(predicted_char)

    generated_text = ''.join(text_generated)

    return generated_text

def gerar_texto(texto_semente):
    generated_text = generate_text(model, texto_semente, gen_size=100, temp=1.0)
    return generated_text

@app.route('/', methods=['POST'])
def generate_text_route():
    input_text = request.json['text'] # Obtém o texto semente enviado pelo frontend

    generated_text = gerar_texto(input_text)

    # Retorna a resposta para o frontend
    return jsonify({'generated_text': generated_text})

if __name__ == '__main__':
    app.run()