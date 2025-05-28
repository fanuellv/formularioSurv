"use client";

import Link from 'next/link';

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
        className="mb-12 flex items-center justify-center"
      >
        <Image src="/img/logo2.svg" width={200} height={200} alt="Logo" className="w-1/2" />
      </div>
      <p
        className="text-white w-3/5 sm:text-2xl text-center"
        
      >
        Faça parte da revolução dos seguros em Angola!{" "}
        <span className="bg-white text-[#0153A5] p-1 rounded">
          Junta-se à MediaSeg
        </span>{" "}
        e ajude-nos a transformar o futuro dos seguros.
      </p>

      <Link href="/identificacao" passHref>
  <button className="
    text-[#0153a5] font-semibold bg-white rounded-lg px-6 py-3 sm:text-3xl
    border border-blue-500
    transition duration-300 ease-in-out
    hover:text-blue-500 hover:scale-110 hover:rotate-3 hover:shadow-lg
    active:text-blue-700 active:scale-95 active:rotate-0 active:shadow-md
    cursor-pointer
  ">
    Participar Agora
  </button>
</Link>
    </div>
  );
}
