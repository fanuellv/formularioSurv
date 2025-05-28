"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.2 : 1));
    }, 2000); // alterna a cada 1 segundo

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-bebas-neue)" }} className="flex flex-col items-center justify-center bg-[#0153A5] h-screen space-y-6">
      <div
        style={{
          transform: `scale(${scale})`,
          transition: "transform 1s ease-in-out",
        }}
        className="mb-12"
      >
        <Image src="/img/logo2.svg" width={200} height={200} alt="Logo" />
      </div>
      <p
        className="text-white w-2/5 text-2xl text-center"
        
      >
        Faça parte da revolução dos seguros em Angola!{" "}
        <span className="bg-white text-[#0153A5] p-1 rounded">
          Junta-se à MediaSeg
        </span>{" "}
        e ajude-nos a transformar o futuro dos seguros.
      </p>

      <button className="text-[#0153a5] font-semibold bg-white rounded p-2 text-3xl hover:text-blue-400">Participar Agora</button>
    </div>
  );
}
