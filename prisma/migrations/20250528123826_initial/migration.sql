-- CreateTable
CREATE TABLE "Participante" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "faixa_etaria" INTEGER NOT NULL,
    "genero" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(50) NOT NULL,
    "provincia" VARCHAR(50) NOT NULL,

    CONSTRAINT "Participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta1Familiaridade" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta1Familiaridade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta2PossuiSeguro" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta2PossuiSeguro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta3TiposSeguro" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta3TiposSeguro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta4UsouAplicativos" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta4UsouAplicativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta5AplicativosUsa" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta5AplicativosUsa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta6AppComparar" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta6AppComparar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta7FrequenciaUso" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta7FrequenciaUso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta8SabeUsarApp" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta8SabeUsarApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta9Funcionalidades" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta9Funcionalidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta10Recomendar" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta10Recomendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta11TestesMediaseg" (
    "id" SERIAL NOT NULL,
    "participanteId" INTEGER NOT NULL,
    "resposta" TEXT NOT NULL,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pergunta11TestesMediaseg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pergunta1Familiaridade" ADD CONSTRAINT "Pergunta1Familiaridade_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta2PossuiSeguro" ADD CONSTRAINT "Pergunta2PossuiSeguro_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta3TiposSeguro" ADD CONSTRAINT "Pergunta3TiposSeguro_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta4UsouAplicativos" ADD CONSTRAINT "Pergunta4UsouAplicativos_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta5AplicativosUsa" ADD CONSTRAINT "Pergunta5AplicativosUsa_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta6AppComparar" ADD CONSTRAINT "Pergunta6AppComparar_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta7FrequenciaUso" ADD CONSTRAINT "Pergunta7FrequenciaUso_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta8SabeUsarApp" ADD CONSTRAINT "Pergunta8SabeUsarApp_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta9Funcionalidades" ADD CONSTRAINT "Pergunta9Funcionalidades_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta10Recomendar" ADD CONSTRAINT "Pergunta10Recomendar_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pergunta11TestesMediaseg" ADD CONSTRAINT "Pergunta11TestesMediaseg_participanteId_fkey" FOREIGN KEY ("participanteId") REFERENCES "Participante"("id") ON DELETE CASCADE ON UPDATE CASCADE;
