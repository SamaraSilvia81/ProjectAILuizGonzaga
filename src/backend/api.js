import axios from "axios";

const instance = axios.create({
  baseURL: 'https://projectluizgonzagabackend-production.up.railway.app', // URL do serviço web do Railway
});

// User

export const getMusic = () =>
  instance
    .get("/generate")
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data;
});

export const createMusic = ({text}) => {
  return instance.post("/generate", {
    text
  });
};