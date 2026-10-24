
import { useState } from "react"

type ModulosProps = {
  onVoltar: () => void
  onAbrirDesafio: () => void
}

const modulos = [
  {
    id: 1,
    titulo: "PHISHING",
    descricao: "Identifique mensagens, links e solicitações suspeitas.",
    nivel: "INICIANTE",
    capitulos: [
      {
        titulo: "O que é phishing?",
        conteudo:
          "Phishing é uma tentativa de enganar pessoas para obter informações ou induzi-las a realizar ações inseguras. Essas tentativas podem chegar por e-mail, mensagens ou páginas falsas.",
        objetivo:
          "Reconhecer os sinais de uma tentativa de phishing.",
      },
      {
        titulo: "Sinais de alerta",
        conteudo:
          "Urgência exagerada, remetentes desconhecidos, endereços estranhos e pedidos de informações confidenciais são sinais que merecem atenção.",
        objetivo:
          "Analisar uma mensagem e identificar possíveis sinais de risco.",
      },
      {
        titulo: "Como se proteger",
        conteudo:
          "Evite abrir links suspeitos. Confirme solicitações por canais oficiais e nunca forneça senhas em resposta a mensagens inesperadas.",
        objetivo:
          "Escolher uma resposta segura diante de uma mensagem suspeita.",
      },
    ],
  },
  {
    id: 2,
    titulo: "SENHAS E AUTENTICAÇÃO",
    descricao: "Aprenda a proteger contas e credenciais.",
    nivel: "INICIANTE",
    capitulos: [
      {
        titulo: "Criando senhas seguras",
        conteudo:
          "Senhas longas e únicas ajudam a proteger suas contas. Evite reutilizar a mesma senha em diferentes serviços.",
        objetivo: "Reconhecer boas práticas para criar senhas.",
      },
      {
        titulo: "Autenticação multifator",
        conteudo:
          "A autenticação multifator acrescenta uma etapa de verificação além da senha, oferecendo uma camada extra de proteção.",
        objetivo: "Entender por que uma segunda etapa de verificação ajuda.",
      },
      {
        titulo: "Proteção das contas",
        conteudo:
          "Não compartilhe códigos de autenticação e desconfie de solicitações inesperadas para confirmar seu acesso.",
        objetivo: "Selecionar medidas para proteger uma conta.",
      },
    ],
  },
  {
    id: 3,
    titulo: "ENGENHARIA SOCIAL",
    descricao: "Entenda como a manipulação pode gerar riscos digitais.",
    nivel: "INICIANTE",
    capitulos: [
      {
        titulo: "Como funciona a manipulação",
        conteudo:
          "Engenharia social utiliza estratégias de persuasão para levar alguém a revelar informações ou executar ações sem a devida verificação.",
        objetivo: "Reconhecer situações de manipulação.",
      },
      {
        titulo: "Urgência e confiança",
        conteudo:
          "Mensagens que pressionam por uma decisão imediata ou fingem vir de alguém conhecido devem ser verificadas com cuidado.",
        objetivo: "Identificar sinais de pressão indevida.",
      },
      {
        titulo: "Tomando decisões seguras",
        conteudo:
          "Pare, confira a identidade de quem fez o pedido e use um canal confiável antes de compartilhar informações.",
        objetivo: "Aplicar um procedimento seguro de verificação.",
      },
    ],
  },
  {
    id: 4,
    titulo: "CONTENT INJECTION",
    descricao: "Explore riscos relacionados à entrada e interpretação de conteúdo.",
    nivel: "PROGRESSIVO",
    capitulos: [
      {
        titulo: "Fundamentos de Content Injection",
        conteudo:
          "Content Injection ocorre quando conteúdo inserido em um sistema altera inesperadamente o conteúdo ou o comportamento apresentado. Os riscos dependem do contexto da aplicação.",
        objetivo: "Compreender o conceito e reconhecer situações de risco.",
      },
      {
        titulo: "Entradas não confiáveis",
        conteudo:
          "Dados fornecidos por usuários precisam ser tratados com cuidado. Uma aplicação não deve presumir que toda entrada é segura.",
        objetivo: "Identificar pontos em que entradas precisam ser verificadas.",
      },
      {
        titulo: "Validação e prevenção",
        conteudo:
          "Validação de entradas, codificação adequada de saída e APIs seguras ajudam a reduzir riscos, conforme o contexto da aplicação.",
        objetivo: "Escolher medidas de prevenção adequadas.",
      },
      {
        titulo: "Missão final",
        conteudo:
          "Reúna os conceitos aprendidos para analisar um cenário fictício e selecionar as medidas de proteção mais adequadas.",
        objetivo: "Aplicar os conceitos em um cenário controlado.",
      },
    ],
  },
]

function Modulos({ onVoltar, onAbrirDesafio }: ModulosProps) {
  const [moduloSelecionado, setModuloSelecionado] = useState<number | null>(
    null,
  )
  const [capituloSelecionado, setCapituloSelecionado] = useState<number | null>(
    null,
  )

  const modulo = modulos.find((item) => item.id === moduloSelecionado)
  const capitulo = modulo?.capitulos[capituloSelecionado ?? 0]

  function selecionarModulo(id: number) {
    setModuloSelecionado(id)
    setCapituloSelecionado(null)
  }

  return (
    <main className="min-h-screen bg-[#080808] p-6 text-white md:p-10">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-xl font-bold tracking-[0.2em]">
            SECURITY<span className="text-gray-500">_</span>SMART
          </h1>
          <p className="mt-2 text-[10px] tracking-[0.25em] text-gray-500">
            LEARNING_SYSTEM // KNOWLEDGE_BASE
          </p>
        </div>

        <button
          type="button"
          onClick={onVoltar}
          className="border border-gray-700 px-4 py-3 text-xs tracking-widest hover:bg-white hover:text-black"
        >
          &lt; VOLTAR_AO_PAINEL
        </button>
      </header>

      <section className="mx-auto mt-10 max-w-6xl">
        <p className="text-xs tracking-[0.25em] text-gray-500">
          ACADEMIA // MÓDULOS
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-widest md:text-3xl">
          BASE DE CONHECIMENTO
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
          Escolha um módulo, estude os capítulos e coloque seu conhecimento
          em prática no desafio ao final.
        </p>

        {!modulo && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {modulos.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selecionarModulo(item.id)}
                className="border border-gray-800 bg-[#101010] p-5 text-left transition hover:border-gray-400"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs tracking-widest text-gray-500">
                    MODULE_{String(item.id).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {item.nivel}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-widest">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.descricao}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-gray-800 pt-4 text-xs">
                  <span className="text-gray-500">
                    {item.capitulos.length} CAPÍTULOS
                  </span>
                  <span className="font-bold tracking-widest">
                    ACESSAR &gt;
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {modulo && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                setModuloSelecionado(null)
                setCapituloSelecionado(null)
              }}
              className="text-xs tracking-widest text-gray-400 hover:text-white"
            >
              &lt; TODOS_OS_MÓDULOS
            </button>

            <h3 className="mt-5 text-xl font-bold tracking-widest">
              {modulo.titulo}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {modulo.descricao}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
              <div className="space-y-3">
                {modulo.capitulos.map((item, index) => (
                  <button
                    key={item.titulo}
                    type="button"
                    onClick={() => setCapituloSelecionado(index)}
                    className={`w-full border p-4 text-left ${
                      capituloSelecionado === index
                        ? "border-white bg-white/10"
                        : "border-gray-800 bg-[#101010] hover:border-gray-500"
                    }`}
                  >
                    <p className="text-[10px] tracking-widest text-gray-500">
                      CAPÍTULO_{String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm font-bold">{item.titulo}</p>
                  </button>
                ))}
              </div>

              <article className="border border-gray-800 bg-[#101010] p-5 md:p-7">
                {capitulo ? (
                  <>
                    <p className="text-[10px] tracking-widest text-gray-500">
                      CONTEÚDO_DO_CAPÍTULO
                    </p>
                    <h4 className="mt-4 text-xl font-bold">
                      {capitulo.titulo}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-gray-300">
                      {capitulo.conteudo}
                    </p>

                    <div className="mt-6 border-l-2 border-gray-600 pl-4">
                      <p className="text-xs tracking-widest text-gray-500">
                        OBJETIVO_DE_APRENDIZAGEM
                      </p>
                      <p className="mt-2 text-sm leading-6 text-gray-300">
                        {capitulo.objetivo}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={onAbrirDesafio}
                      className="mt-7 w-full bg-white px-5 py-4 text-xs font-bold tracking-widest text-black hover:bg-gray-300"
                    >
                      &gt; INICIAR_ATIVIDADE_PRÁTICA
                    </button>
                    <p className="mt-3 text-xs leading-5 text-gray-500">
                      A atividade prática atual é demonstrativa. Os desafios
                      específicos de cada capítulo serão implementados nas
                      próximas etapas.
                    </p>
                  </>
                ) : (
                  <div className="flex min-h-64 flex-col justify-center">
                    <p className="text-xs tracking-widest text-gray-500">
                      AGUARDANDO_SELEÇÃO
                    </p>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Selecione um capítulo para acessar o conteúdo e seu
                      objetivo de aprendizagem.
                    </p>
                  </div>
                )}
              </article>
            </div>
          </div>
        )}
      </section>

      <footer className="mx-auto mt-12 max-w-6xl border-t border-gray-800 pt-5 text-[10px] tracking-widest text-gray-600">
        SECURITY_SMART // LEARN · PRACTICE · PROGRESS
      </footer>
    </main>
  )
}

export default Modulos
