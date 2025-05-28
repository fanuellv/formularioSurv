import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data || typeof data !== 'object') {
      throw new Error('Dados inválidos');
    }

    const participante = await prisma.participante.create({
      data: {
        nome: data.nome,
        faixa_etaria: data.faixaEtaria,
        genero: data.genero,
        email: data.email,
        telefone: data.telefone,
        provincia: data.provincia,
      },
    });

    const participanteId = participante.id;

    await prisma.pergunta1Familiaridade.create({
      data: {
        participanteId,
        resposta: data.familiaridade,
      },
    });

    await prisma.pergunta2PossuiSeguro.create({
      data: {
        participanteId,
        resposta: data.possuiSeguro,
      },
    });

    if (data.tipoSeguro) {
        await prisma.pergunta3TiposSeguro.create({
          data: {
            participanteId,
            resposta: data.tipoSeguro,
          },
        });
      }

    await prisma.pergunta4UsouAplicativos.create({
      data: {
        participanteId,
        resposta: data.usaPlataformas,
      },
    });

    await prisma.pergunta5AplicativosUsa.create({
      data: {
        participanteId,
        resposta: data.usaFinanceiros,
      },
    });

    await prisma.pergunta6AppComparar.create({
      data: {
        participanteId,
        resposta: data.usariaApp,
      },
    });

    await prisma.pergunta7FrequenciaUso.create({
      data: {
        participanteId,
        resposta: data.frequenciaPesquisa,
      },
    });

    
    await prisma.pergunta8SabeUsarApp.create({
          data: {
            participanteId,
            resposta: data.saberUsaApp,
          },
    });
    

    await prisma.pergunta9Funcionalidades.create({
      data: {
        participanteId,
        resposta: data.funcionalidadesDesejadas,
      },
    });

    await prisma.pergunta10Recomendar.create({
      data: {
        participanteId,
        resposta: data.recomendarApp,
      },
    });

    await prisma.pergunta11TestesMediaseg.create({
      data: {
        participanteId,
        resposta: data.querParticipar,
      },
    });

    return NextResponse.json({
      message: 'Participante e respostas criados com sucesso!',
    });
  } catch (error) {
    
    console.error('Erro ao criar participante:', error instanceof Error ? error.message : error);

    

    return NextResponse.json(
      { error: 'Erro ao salvar dados' },
      { status: 500 }
    );
  }
}
