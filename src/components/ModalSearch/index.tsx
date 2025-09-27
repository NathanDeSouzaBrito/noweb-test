import React, { useState } from "react";
import getCepInfo from "../../services/cepService";
import useCepStore from "../../store/cepStore";
import styles from "./style.module.css";

export default function ModalSearch() {
  const close = useCepStore((s) => s.closeModal);
  const setCepData = useCepStore((s) => s.setCepData);
  const cepData = useCepStore((s) => s.cepData);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    telefone: "",
    email: "",
    completo: "",
  });

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length !== 8) {
      setError("CEP inválido. Deve conter 8 dígitos.");
      return;
    }
    try {
      setLoading(true);
      const data = await getCepInfo(cleaned);
      if ((data as any).erro) {
        setError("CEP não encontrado.");
        setCepData(null);
      } else {
        setCepData(data);
      }
    } catch (err) {
      setError("Erro ao consultar ViaCEP.");
      setCepData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Pesquisar CEP</h2>
          <button className={styles.closeButton} onClick={close}>
            ✕
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label>CEP</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ex: 00000-000 ou 00000000"
            />
          </div>

          <div className={styles.actions}>
            <button type="submit" disabled={loading}>
              {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
            <button
              type="button"
              onClick={() => {
                setValue("");
                setCepData(null);
                setError(null);
                setFormData({
                  nome: "",
                  numero: "",
                  telefone: "",
                  email: "",
                  completo: "",
                });
              }}
            >
              Limpar
            </button>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          {/* Inputs do formulário */}
          <div className={styles.grid}>
            <Field
              label="Nome"
              value={formData.nome}
              onChange={handleFormChange}
              name="nome"
              readOnly={false}
            />
            <Field
              label="Número"
              value={formData.numero}
              onChange={handleFormChange}
              name="numero"
              readOnly={false}
            />
            <Field
              label="Telefone"
              value={formData.telefone}
              onChange={handleFormChange}
              name="telefone"
              readOnly={false}
            />
            <Field
              label="E-mail"
              value={formData.email}
              onChange={handleFormChange}
              name="email"
              readOnly={false}
            />

            {/* Campos preenchidos pelo CEP */}
            <Field label="Rua" value={cepData?.logradouro} />
            <Field label="Bairro" value={cepData?.bairro} />
            <Field
              label="Completo"
              value={formData.completo}
              onChange={handleFormChange}
              name="completo"
              readOnly={false}
            />
            <Field label="Cidade" value={cepData?.localidade} />
            <Field label="UF" value={cepData?.uf} />
            <Field label="CEP" value={cepData?.cep} />
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  name,
  readOnly = true,
}: {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  readOnly?: boolean;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label>{label}</label>
      <input
        name={name}
        readOnly={readOnly}
        value={value ?? ""}
        onChange={onChange}
        className={readOnly ? styles.readonly : ""}
      />
    </div>
  );
}
