import React, { useState } from "react";
import getCepInfo from "../../services/cepService";
import useCepStore from "../../store/cepStore";

export default function ModalSearch() {
  const close = useCepStore((s) => s.closeModal);
  const setCepData = useCepStore((s) => s.setCepData);
  const cepData = useCepStore((s) => s.cepData);

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-medium">Pesquisar CEP</h2>
          <button onClick={close} aria-label="Fechar">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">CEP</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ex: 00000-000 ou 00000000"
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-green-600 text-white disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
            <button
              type="button"
              onClick={() => {
                setValue("");
                setCepData(null);
                setError(null);
              }}
              className="px-4 py-2 border rounded-md"
            >
              Limpar
            </button>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          {cepData && (
            <div className="grid grid-cols-1 gap-2 mt-4">
              <Field label="Logradouro" value={cepData.logradouro} />
              <Field label="Complemento" value={cepData.complemento} />
              <Field label="Bairro" value={cepData.bairro} />
              <Field label="Cidade" value={cepData.localidade} />
              <Field label="UF" value={cepData.uf} />
              <Field label="CEP" value={cepData.cep} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <label className="block text-xs text-gray-600">{label}</label>
      <input
        readOnly
        value={value ?? ""}
        className="mt-1 block w-full rounded-md border bg-gray-100 px-3 py-2"
      />
    </div>
  );
}
