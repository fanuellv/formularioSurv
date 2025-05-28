"use client";

import { useState } from "react";

interface Opcao {
  texto: string;
  icon?: React.ReactNode;
}

export interface Props {
  pergunta: string;
  opcoes: Opcao[];
  onAvancar: (resposta: string) => void;
  onVoltar: () => void;  // nova prop
  campoTexto?: boolean;          // Flag para mostrar textarea
  placeholderTexto?: string;     // Placeholder para o textarea
}

export default function Pergunta({ pergunta, opcoes, onAvancar, onVoltar,campoTexto = false,
    placeholderTexto = "Escreva sua resposta aqui...", }: Props) {
        const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(null);
        const [respostaTexto, setRespostaTexto] = useState("");
      
        const enviarResposta = () => {
          if (campoTexto && respostaTexto.trim() !== "") {
            console.log("Enviando texto:", respostaTexto.trim());
            onAvancar(respostaTexto.trim());
          } else if (respostaSelecionada !== null) {
            console.log("Enviando opção:", opcoes[respostaSelecionada].texto);
            onAvancar(opcoes[respostaSelecionada].texto);
          }
        };


  return (
    <div className="space-y-6">
      <p className="text-3xl text-[#0153a5] font-semibold">{pergunta}</p>
      <div className="space-y-3">
        {opcoes.map((opcao, index) => (
          <div
            key={index}
            onClick={() => setRespostaSelecionada(index)}
            className={`flex items-center justify-between border border-gray-400 text-gray-500 px-5 py-8 rounded cursor-pointer transition-all ${
              respostaSelecionada === index ? "bg-[#0153a5] text-white"  // fundo azul + texto branco
              : "bg-white text-gray-500"   // fundo branco + texto cinza
            }`}
          >
            <span>{opcao.texto}</span>
            <span className="text-3xl">{opcao.icon}</span>
          </div>
        ))}
      </div>
      {campoTexto && (
        <textarea
          className="w-full border border-gray-400 h-20 rounded p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0153a5]"
          placeholder={placeholderTexto}
          value={respostaTexto}
          onChange={(e) => setRespostaTexto(e.target.value)}
          rows={5}
        />
      )}

      <div className="flex justify-between">
      <button
        type="button"
        onClick={onVoltar}
        className="bg-gray-600 text-white px-12 py-4 rounded hover:bg-gray-700"
      >
        Voltar
      </button>

      <button
       disabled={
        campoTexto
          ? respostaTexto.trim() === "" && respostaSelecionada === null
          : respostaSelecionada === null
      }
        onClick={enviarResposta}
        className="bg-[#0153a5] font-bold text-white px-12 py-4 rounded disabled:bg-gray-400"
      >
        Avançar
      </button>
    </div>
    </div>
  );
}
