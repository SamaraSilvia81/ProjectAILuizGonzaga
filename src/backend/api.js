import axios from "axios";

const instance = axios.create({
  baseURL: 'http://192.168.0.5:3000', // URL do serviço web do Railway
});

export const createMusic = (text, count) => {
  return instance.post("/generate", {
    text,
    count
  })
    .then((res) => {
      return res.data.response;
    })
    .catch((error) => {
      console.error("Erro ao enviar a solicitação:", error);
      throw error;
    });
};
