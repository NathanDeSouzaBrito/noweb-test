import { create } from "zustand";

export interface CepData {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  [key: string]: any;
}

interface CepState {
  isModalOpen: boolean;
  cepData: CepData | null;
  openModal: () => void;
  closeModal: () => void;
  setCepData: (d: CepData | null) => void;
}

const useCepStore = create<CepState>((set) => ({
  isModalOpen: false,
  cepData: null,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setCepData: (d) => set({ cepData: d }),
}));

export default useCepStore;
