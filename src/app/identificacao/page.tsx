"use client";

import React, { useState } from "react";
import {
  FaQuestion,
  FaRegEyeSlash,
  FaRegLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";
import { GiLifeBar } from "react-icons/gi";
import { FaCarCrash } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdGppMaybe } from "react-icons/md";
import { FaFrownOpen } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDocumentScanner } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import Pergunta from "@/app/components/quiz";
import Identificacao, { FormDataId } from "@/app/components/identificacao";

type FormData = {
  nome?: string;
  faixaEtaria?: number;
  genero?: string;
  email?: string;
  telefone?: string;
  provincia?: string;
  familiaridade?: string;
  possuiSeguro?: string;
  tipoSeguro?: string;
  usaPlataformas?: string;
  usaFinanceiros?: string;
  usariaApp?: string;
  frequenciaPesquisa?: string;
  sabeUsarApp?: string;
  funcionalidadesDesejadas?: string;
  recomendarApp?: string;
  querParticipar?: string;
};


export default function Home() {

  
  const [passoAtual, setPassoAtual] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [mostrarPerguntaExtra, setMostrarPerguntaExtra] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🔒 Impede o reload da página
  
    try {
      const response = await fetch("/api/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        console.log("Dados enviados:", result);
        // Redirecionar ou mostrar tela de sucesso aqui, se quiser
        // NÃO usar setPassoAtual(1) aqui, a menos que queira reiniciar tudo
      } else {
        alert("Erro ao enviar: " + result.error);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro inesperado.");
    }
  };

  const salvarResposta = (campo: keyof FormData, resposta: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [campo]: resposta,
    }));
  };

  return (
    <div className="flex w-full bg-white flex-col items-center justify-center space-y-10 h-screen  sm:px-4 sm:py-4  px-4 py-10 overflow-hidden ">
      <div className="absolute top-5 flex gap-1 w-full mb-8 p-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${
              i < passoAtual ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl  sm:max-w-2xl space-y-5 overflow-hidden">
        {passoAtual === 1 && (
          <Identificacao
            onAvancar={(dados: FormDataId) => {
              setFormData((prev) => ({ ...prev, ...dados }));
              setPassoAtual(2);
            }}
          />
        )}

        {passoAtual === 2 && (
          <Pergunta
            pergunta="Você já ouviu falar ou entende como funcionam os seguros?"
            opcoes={[
              { texto: "Nunca ouvi falar", icon: <FaQuestion /> },
              {
                texto: "Ouvi falar, mas não entendo bem",
                icon: <FaRegEyeSlash />,
              },
              { texto: "Tenho alguma noção", icon: <FaRegLightbulb /> },
              { texto: "Entendo bem", icon: <FaCheckCircle /> },
            ]}
            onAvancar={(resposta) => {
              salvarResposta("familiaridade", resposta);
              setPassoAtual(3);
            }}
            onVoltar={() => setPassoAtual(1)}
          />
        )}
       {passoAtual === 3 && (
  <>
    {!mostrarPerguntaExtra ? (
      <Pergunta
        key="pergunta-seguro"
        pergunta="Você possui seguro?"
        opcoes={[{ texto: "Sim" ,icon:<RiUserFollowFill />}, { texto: "Não" ,icon:<RiUserUnfollowFill />}]}
        onAvancar={(resposta) => {
          salvarResposta("possuiSeguro", resposta);
          if (resposta === "Sim") {
            setMostrarPerguntaExtra(true);
          } else {
            setPassoAtual(4);
          }
        }}
        onVoltar={() => setPassoAtual(2)}
      />
    ) : (
      <Pergunta
        key="tipo-seguro" // ← chave única aqui força o React a resetar
        pergunta="Qual tipo de seguro você possui?"
        opcoes={[
          { texto: "Seguro de Vida" ,icon:<GiLifeBar />},
          { texto: "Seguro Automóvel" ,icon:<FaCarCrash />},
          { texto: "Seguro Saúde", icon:<FaHeartCirclePlus />},
        ]}
        campoTexto={true}
        placeholderTexto="Indique o tipo de seguro..."
        onAvancar={(resposta) => {
          salvarResposta("tipoSeguro", resposta);
          setPassoAtual(4);
        }}
        onVoltar={() => {
          setMostrarPerguntaExtra(false);
          setPassoAtual(3);
        }}
      />
    )}
  </>
)}





        {passoAtual === 4 && (
          <Pergunta
            pergunta="Você já usou aplicativos ou plataformas online para contratar ou comparar seguros?"
            opcoes={[{ texto: "Sim" ,icon:<RiUserFollowFill />}, { texto: "Não" ,icon:<RiUserUnfollowFill />}]}
            onAvancar={(resposta) => {
              salvarResposta("usaPlataformas", resposta);
              setPassoAtual(5);
            }}
            onVoltar={() => {
              if (formData.possuiSeguro === "Sim") {
                setMostrarPerguntaExtra(true);
              }
              setPassoAtual(3);
            }}
          />
        )}
        {passoAtual === 5 && (
          <Pergunta
            pergunta="Costuma usar aplicativos para contratar ou comparar outros serviços financeiros (como bancos, crédito, investimentos)?"
            opcoes={[{ texto: "Sim",icon:<RiUserFollowFill /> }, { texto: "Não" , icon:<RiUserUnfollowFill />}]}
            onAvancar={(resposta) => {
              salvarResposta("usaFinanceiros", resposta);
              setPassoAtual(6);
            }}
            onVoltar={() => setPassoAtual(4)}
          />
        )}

        {passoAtual === 6 && (
          <Pergunta
            pergunta="Se existisse um app que comparasse preços, coberturas e benefícios de diferentes seguradoras em Angola, você usaria?"
            opcoes={[
              { texto: "Sim, com certeza",icon:<RiUserFollowFill /> },
              { texto: "Talvez" ,icon:<MdGppMaybe />},
              { texto: "Não usaria", icon:<RiUserUnfollowFill />},
            ]}
            onAvancar={(resposta) => {
              salvarResposta("usariaApp", resposta);
              setPassoAtual(7);
            }}
            onVoltar={() => setPassoAtual(5)}
          />
        )}
        {passoAtual === 7 && (
          <Pergunta
            pergunta="Com que frequência você pesquisaria sobre seguros através de um aplicativo como esse?"
            opcoes={[
              { texto: "Sempre que precisasse",icon:<RiUserFollowFill /> },
              { texto: "Uma vez por mês" ,icon:<MdCalendarMonth />},
              { texto: "Raramente",icon:<MdGppMaybe />},
              { texto: "Nunca" ,icon:<FaFrownOpen />},
            ]}
            onAvancar={(resposta) => {
              salvarResposta("frequenciaPesquisa", resposta);
              setPassoAtual(8);
            }}
            onVoltar={() => setPassoAtual(6)}
          />
        )}
        {passoAtual === 8 && (
          <Pergunta
            pergunta="Você saberia utilizar um aplicativo para contratar ou gerenciar seus seguros?"
            opcoes={[
              { texto: "Sim, sem dificuldades",icon:<RiUserFollowFill /> },
              { texto: "Talvez precisasse de ajuda",icon:<MdGppMaybe /> },
              { texto: "Não, seria totalmente novo para mim",icon:<FaFrownOpen /> },
            ]}
            onAvancar={(resposta) => {
              salvarResposta("sabeUsarApp", resposta);
              setPassoAtual(9);
            }}
            onVoltar={() => setPassoAtual(7)}
          />
        )}
        {passoAtual === 9 && (
          <Pergunta
            pergunta="Que funcionalidades você gostaria de ver nesse aplicativo?"
            opcoes={[
              { texto: "Lembretes de renovação de seguro" ,icon:<FaStickyNote />},
              { texto: "Comparação de preços e coberturas",icon:<RiSecurePaymentLine /> },
              { texto: "Acesso a documentos digitais (Apolices)",icon:<MdDocumentScanner /> },
              { texto: "Notificações sobre promoções",icon:<IoIosNotifications /> },
            ]}
            campoTexto={true}
            placeholderTexto="Outras funcionalidades que você gostaria..."
            onAvancar={(resposta) => {
              salvarResposta("funcionalidadesDesejadas", resposta); // Aqui você pode salvar como string combinada
              setPassoAtual(10); 
            }}
            onVoltar={() => setPassoAtual(7)}
          />
        )}
        {passoAtual === 10 && (
          <Pergunta
            pergunta="Você recomendaria esse aplicativo para amigos e familiares?"
            opcoes={[{ texto: "Sim",icon:<RiUserFollowFill /> }, { texto: "Talvez",icon:<MdGppMaybe />  }, { texto: "Não",icon:<FaFrownOpen /> }]}
            onAvancar={(resposta) => {
              salvarResposta("recomendarApp", resposta);
              setPassoAtual(11);
            }}
            onVoltar={() => setPassoAtual(9)}
          />
        )}
        {passoAtual === 11 && (
          <Pergunta
            pergunta="Gostaria de participar da fase de testes do aplicativo MediaSeg?"
            opcoes={[{ texto: "Sim",icon:<RiUserFollowFill /> }, { texto: "Não",icon:<FaFrownOpen /> }]}
            onAvancar={(resposta) => {
              salvarResposta("querParticipar", resposta);
              setPassoAtual(12);
            }}
            onVoltar={() => setPassoAtual(10)}
          />
        )}

{passoAtual === 12 && (
  <>
    <div className="text-center text-gray-700 max-w-lg mx-auto p-4  rounded ">
      <h2 className="text-2xl font-bold mb-4">Confirme os seus dados</h2>

      {/* Exibe os dados com formatação */}
      <div className="text-left bg-white p-4 rounded border border-gray-700 max-h-64 overflow-auto">
        {Object.entries(formData).map(([chave, valor]) => (
          <p key={chave} className="mb-2">
            <strong className="capitalize">{chave.replace(/([A-Z])/g, ' $1')}:</strong> {valor?.toString() || 'Não informado'}
          </p>
        ))}
      </div>

      <p className="text-gray-600 mt-4 mb-6">
        Clique em <strong>Enviar</strong> para finalizar ou <strong>Voltar</strong> para revisar suas respostas.
      </p>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-12 py-4 rounded transition"
          onClick={() => {
            // Limpa os dados que quiser (aqui exemplo: limpar as respostas específicas)
            setFormData(prev => {
              const novo = { ...prev };
              // Limpar campos que deseja, ou todos do passo 12
              
              delete novo.nome;
              delete novo.faixaEtaria;
              delete novo.genero;
              delete novo.email;
              delete novo.telefone;
              delete novo.provincia;
              delete novo.familiaridade;
              delete novo.possuiSeguro;
              delete novo.tipoSeguro;
              delete novo.usaPlataformas;
              delete novo.usariaApp;
              delete novo.frequenciaPesquisa;
              delete novo.sabeUsarApp;
              delete novo.funcionalidadesDesejadas;
              delete novo.recomendarApp;
              delete novo.querParticipar;
              // Você pode limpar tudo se quiser:
              // return {};
              return novo;
            });
            setPassoAtual(1);
          }}
        >
          Recomeçar
        </button>

        <button
          type="submit"
          className="bg-[#0153a5] font-bold text-white px-12 py-4 rounded transition"
        >
          Enviar
        </button>
      </div>
    </div>
  </>
)}

      </form>
    </div>
  );
}
