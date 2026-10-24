import { useState } from "react"

type DesafioProps = {
  onVoltarModulos: () => void
  onVoltarDashboard: () => void
}

function Desafio({
  onVoltarModulos,
  onVoltarDashboard,
}: DesafioProps) {
  const [resposta, setResposta] = useState("")
  const [confirmado, setConfirmado] = useState(false)

  const respostaCorreta = resposta === "B"

  function confirmarResposta() {
    if (!resposta) return
    setConfirmado(true)
  }

  function tentarNovamente() {
    setResposta("")
    setConfirmado(false)
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white p-6 md:p-10">
      {/* CABEÇALHO */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
        
<div className="mx-auto mt-5 flex max-w-3xl flex-wrap gap-3">
  <button
    type="button"
    onClick={onVoltarModulos}
    className="border border-gray-700 px-4 py-3 text-xs tracking-widest text-gray-300 transition hover:border-white hover:text-white"
  >
    &lt; VOLTAR AOS MÓDULOS
  </button>

  <button
    type="button"
    onClick={onVoltarDashboard}
    className="border border-gray-700 px-4 py-3 text-xs tracking-widest text-gray-300 transition hover:border-white hover:text-white"
  >
    &lt; VOLTAR AO PAINEL
  </button>
</div>

        <div>
          <h1 className="text-xl font-bold tracking-[0.2em]">
            SECURITY<span className="text-gray-500">_</span>SMART
          </h1>
          <p className="mt-2 text-[10px] tracking-[0.25em] text-gray-500">
            TRAINING_SYSTEM // MODULE_01
          </p>
        </div>

        <div className="border border-gray-700 px-4 py-3">
          <p className="text-[10px] tracking-widest text-gray-500">
            RECOMPENSA
          </p>
          <p className="mt-1 font-bold">+100 XP</p>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="mx-auto mt-10 max-w-3xl">
        <div className="mb-6 flex items-center gap-3 text-xs tracking-widest text-gray-500">
          <span>MODULO_01</span>
          <span>//</span>
          <span className="text-white">PHISHING</span>
        </div>

        <h2 className="text-2xl font-bold tracking-widest md:text-3xl">
          ANALISE A MENSAGEM
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Você recebeu o e-mail abaixo. Analise os detalhes e identifique
          a atitude mais segura.
        </p>

        {/* E-MAIL SIMULADO */}
        <div className="mt-8 border border-gray-700 bg-[#101010]">
          <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
            <span className="text-xs tracking-widest text-gray-400">
              INCOMING_MESSAGE.eml
            </span>
            <span className="text-[10px] text-gray-500">
              SIMULAÇÃO EDUCACIONAL
            </span>
          </div>

          <div className="space-y-3 p-5 text-sm">
            <p>
              <span className="text-gray-500">DE:</span>{" "}
              suporte@banc0-seguro.example
            </p>
            <p>
              <span className="text-gray-500">ASSUNTO:</span>{" "}
              URGENTE — Verifique sua conta
            </p>

            <div className="my-5 border-l-2 border-gray-600 pl-4 leading-7 text-gray-300">
              Identificamos uma atividade incomum na sua conta.
              <br />
              Para evitar restrições, confirme seus dados imediatamente
              acessando o link abaixo.
              <br />
              <span className="text-gray-500 underline">
                [ LINK DE VERIFICAÇÃO SIMULADO ]
              </span>
            </div>

            <p className="text-xs text-gray-500">
              SYSTEM_NOTE: Não acesse links reais durante este treinamento.
            </p>
          </div>
        </div>

        {/* ALTERNATIVAS */}
        <div className="mt-8">
          <h3 className="text-sm font-bold tracking-widest">
            QUAL É A ATITUDE MAIS SEGURA?
          </h3>

          <div className="mt-4 space-y-3">
            {[
              {
                id: "A",
                texto: "Clicar no link para evitar o bloqueio da conta.",
              },
              {
                id: "B",
                texto:
                  "Não clicar e verificar a solicitação por um canal oficial.",
              },
              {
                id: "C",
                texto: "Responder ao e-mail enviando meus dados pessoais.",
              },
            ].map((opcao) => (
              <button
                key={opcao.id}
                type="button"
                disabled={confirmado}
                onClick={() => setResposta(opcao.id)}
                className={`w-full border p-4 text-left transition ${
                  resposta === opcao.id
                    ? "border-white bg-white/10"
                    : "border-gray-800 bg-[#0c0c0c] hover:border-gray-500"
                } ${
                  confirmado ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span className="mr-4 text-xs text-gray-500">
                  [{opcao.id}]
                </span>
                <span className="text-sm leading-6">{opcao.texto}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONFIRMAR */}
        {!confirmado ? (
          <button
            type="button"
            onClick={confirmarResposta}
            disabled={!resposta}
            className="mt-6 w-full bg-white px-6 py-4 text-sm font-bold tracking-widest text-black transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
          >
            &gt; CONFIRMAR_RESPOSTA
          </button>
        ) : (
          <div className="mt-6 border border-gray-700 bg-[#101010] p-6">
            <p className="text-xs tracking-widest text-gray-500">
              RESULTADO_DA_ANÁLISE
            </p>

            <h3 className="mt-3 text-xl font-bold tracking-widest">
              {respostaCorreta
                ? "RESPOSTA CORRETA"
                : "RESPOSTA INCORRETA"}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              {respostaCorreta
                ? "Boa! Você identificou a atitude mais segura. Verifique solicitações suspeitas por canais oficiais e nunca confie apenas na urgência de uma mensagem."
                : "Mensagens que exigem ação imediata e solicitam dados merecem cautela. Não clique no link; verifique a solicitação por um canal oficial."}
            </p>

            <p className="mt-4 text-sm font-bold tracking-widest">
              {respostaCorreta ? "+100 XP" : "+0 XP"}
            </p>

            <button
              type="button"
              onClick={tentarNovamente}
              className="mt-6 border border-gray-600 px-5 py-3 text-xs tracking-widest transition hover:bg-white hover:text-black"
            >
              &gt; TENTAR_NOVAMENTE
            </button>
          </div>
        )}
      </section>

      <footer className="mx-auto mt-12 max-w-3xl border-t border-gray-800 pt-5 text-[10px] tracking-widest text-gray-600">
        SECURITY_SMART // CYBERSECURITY_AWARENESS_TRAINING
      </footer>
    </main>
  )
}

export default Desafio
