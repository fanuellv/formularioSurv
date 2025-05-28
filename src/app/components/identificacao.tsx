"use client";

import { useState } from "react";
import { TbSelector } from "react-icons/tb";

interface FormData {
    nome: string;
    faixaEtaria: number;
    genero: string;
    email: string;
    telefone: string;
    provincia: string;
  }
  
  interface Props {
    onAvancar: (dados: FormData) => void;
    
  }

export default function Identificacao({ onAvancar }: Props) {
  const [formData, setFormData] = useState({
    nome: "",
    faixaEtaria: 18,
    genero: "",
    email: "",
    telefone: "",
    provincia: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      faixaEtaria: parseInt(e.target.value),
    }));
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Vamos começar pelo seu perfil</h1>

      {/* Nome */}
      <div className="flex flex-col">
        <label
          htmlFor="nome"
          className="text-[#0153A5] uppercase text-sm font-bold"
        >
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Como deseja ser identificado?"
          className="p-2 border-b border-b-gray-400"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>

      {/* Faixa etária e gênero */}
      <div className="flex gap-6">
        {/* Faixa etária */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="faixa"
            className="text-[#0153A5] uppercase text-sm font-bold"
          >
            Faixa etária
          </label>
          <div className="flex items-center gap-4">
            <input
              id="faixa"
              name="faixaEtaria"
              type="range"
              min={12}
              max={100}
              value={formData.faixaEtaria}
              onChange={handleRangeChange}
            />
            <span className="min-w-[30px] text-right">
              {formData.faixaEtaria}
            </span>
          </div>
        </div>

        {/* Gênero */}
        <div className="flex flex-col flex-1">
          <label className="text-[#0153A5] uppercase text-sm font-bold">
            Gênero
          </label>
          <div className="flex gap-4 mt-2">
            {["Masculino", "Feminino", "Outro"].map((gen) => (
              <label key={gen} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="genero"
                  value={gen}
                  checked={formData.genero === gen}
                  onChange={handleChange}
                />
                {gen}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-[#0153A5] uppercase text-sm font-bold"
        >
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Para podermos entrar em contacto com você"
          className="p-2 border-b border-b-gray-400"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Telefone e Província */}
      <div className="flex gap-6">
        {/* Telefone */}
        <div className="flex flex-col flex-1">
          <label
            htmlFor="telefone"
            className="text-[#0153A5] uppercase text-sm font-bold"
          >
            Número de telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="WhatsApp ou outro número válido"
            className="p-2 border-b border-b-gray-400"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        {/* Província */}
        <div className="flex flex-col flex-1 relative">
          <label
            htmlFor="provincia"
            className="text-[#0153A5] uppercase text-sm font-bold"
          >
            Província
          </label>
          <select
            id="provincia"
            name="provincia"
            className="p-2 appearance-none border-b border-b-gray-400"
            value={formData.provincia}
            onChange={handleChange}
          >
            <option value="">Selecione uma província</option>
            {[
              "Bengo",
              "Benguela",
              "Bié",
              "Cabinda",
              "Cuando Cubango",
              "Cuanza Norte",
              "Cuanza Sul",
              "Cunene",
              "Huambo",
              "Huíla",
              "Luanda",
              "Lunda Norte",
              "Lunda Sul",
              "Malanje",
              "Moxico",
              "Namibe",
              "Uíge",
              "Zaire",
            ].map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
          <TbSelector className="absolute right-2 top-9 pointer-events-none" />
        </div>
      </div>

      {/* Botão Avançar */}
      <div className="mt-6">
        <button
          onClick={() => onAvancar(formData)}
          disabled={
            !formData.nome ||
            !formData.genero ||
            !formData.email ||
            !formData.telefone ||
            !formData.provincia
          }
          className="bg-[#0153A5] text-white px-6 py-2 rounded disabled:bg-gray-400"
        >
          Avançar
        </button>
      </div>
    </div>
  );
}
