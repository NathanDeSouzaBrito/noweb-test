import axios from "axios";
import type { CepData } from "../store/cepStore";

const getCepInfo = async (cep: string): Promise<CepData> => {
  const cleaned = cep.replace(/\D/g, "");
  const { data } = await axios.get(`https://viacep.com.br/ws/${cleaned}/json/`);
  return data;
};

export default getCepInfo;
