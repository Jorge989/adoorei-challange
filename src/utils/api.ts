import axios, { AxiosInstance } from "axios";

// Definimos o endereço base da API
const BASE_URL = "https://fakestoreapi.com";

// Criamos uma instância do Axios com o endereço base definido
const customFetch = axios.create({
  baseURL: BASE_URL,
});

// Exportamos a instância do Axios com o endereço base definido
export default customFetch;
