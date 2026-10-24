
import type { Pagina } from "../App"

type DashboardProps = {
  onNavigate: (pagina: Pagina) => void
}

const modulos = [
  {
    id: "01",
    titulo: "PHISHING",
    descricao: "Identificação de mensagens e páginas suspeitas.",
    progresso: 80,
  },
  {
    id: "02",
    titulo: "SENHAS",
    descricao: "Criação e proteção de senhas e credenciais.",
    progresso: 50,
  },
  {
    id: "03",
    titulo: "ENGENHARIA SOCIAL",
    descricao: "Reconhecimento de técnicas de manipulação.",
    progresso: 20,
  },
]

function Dashboard({ onNavigate }: DashboardProps) {
  const xp = 720
  const xpProximoNivel = 1000
  const percentualXP = (xp / xpProximoNivel) * 100

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* HEADER HUD */}
      <header className="border-b border-gray-800 bg-[#080808]/95">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
          <div>
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold tracking-[0.2em]">
                SECURITY<span className="text-gray-500">_</span>SMART
              </h1>

              <span className="hidden text-[9px] tracking-[0.2em] text-gray-600 lg:block">
                // SECURITY AWARENESS PLATFORM
              </span>
            </div>

            <p className="mt-2 text-[9px] tracking-[0.25em] text-gray-600">
              PROTECT INFORMATION // BUILD KNOWLEDGE
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden text-right sm:block">
              <p className="text-[9px] tracking-widest text-gray-600">
                DATA_SYNC
              </p>
              <p className="mt-1 text-xs tracking-widest">LOCAL_MODE</p>
            </div>

            <div className="h-8 w-px bg-gray-800" />

            <div className="text-right">
              <p className="text-[9px] tracking-widest text-gray-600">
                SYSTEM_STATUS
              </p>
              <p className="mt-1 flex items-center justify-end gap-2 text-xs tracking-widest">
                <span>●</span>
                ONLINE
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </header>

      <div className="flex min-h-[calc(100vh-81px)]">
        {/* MENU LATERAL */}
        <aside className="hidden w-56 shrink-0 border-r border-gray-800 p-5 md:block">
          <p className="mb-5 text-[10px] tracking-[0.2em] text-gray-600">
            NAVIGATION
          </p>

          <nav className="space-y-2" aria-label="Navegação principal">
            <button
              type="button"
              onClick={() => onNavigate("dashboard")}
              className="w-full bg-white px-3 py-3 text-left text-xs font-bold tracking-widest text-black"
            >
              &gt; INÍCIO
            </button>

            <button
  type="button"
  onClick={() => onNavigate("modulos")}
  className="w-full px-3 py-3 text-left text-xs tracking-widest text-gray-400 transition hover:bg-[#151515] hover:text-white"
>
  MÓDULOS
</button>

            <button
              type="button"
              onClick={() => onNavigate("desafio")}
              className="w-full px-3 py-3 text-left text-xs tracking-widest text-gray-400 transition hover:bg-[#151515] hover:text-white"
            >
              DESAFIOS
            </button>

            <button
              type="button"
              onClick={() => onNavigate("progresso")}
              className="w-full px-3 py-3 text-left text-xs tracking-widest text-gray-400 transition hover:bg-[#151515] hover:text-white"
            >
              PROGRESSO
            </button>

            <button
              type="button"
              onClick={() => onNavigate("conquistas")}
              className="w-full px-3 py-3 text-left text-xs tracking-widest text-gray-400 transition hover:bg-[#151515] hover:text-white"
            >
              CONQUISTAS
            </button>
          </nav>

          {/* CONFIGURAÇÕES */}
          <div className="mt-8 border-t border-gray-800 pt-5">
            <p className="mb-3 text-[10px] tracking-[0.2em] text-gray-600">
              SYSTEM
            </p>

            <button
              type="button"
              onClick={() => onNavigate("configuracoes")}
              className="w-full px-3 py-3 text-left text-xs tracking-widest text-gray-400 transition hover:bg-[#151515] hover:text-white"
            >
              CONFIGURAÇÕES
            </button>
          </div>
        </aside>

        {/* ÁREA PRINCIPAL */}
        <section className="min-w-0 flex-1 p-5 md:p-8">
          {/* NAVEGAÇÃO PARA TELAS MENORES */}
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2 md:hidden">
            <button
              type="button"
              onClick={() => onNavigate("modulos")}
              className="shrink-0 border border-gray-700 px-3 py-2 text-xs"
            >
              MÓDULOS
            </button>

            <button
              type="button"
              onClick={() => onNavigate("desafio")}
              className="shrink-0 border border-gray-700 px-3 py-2 text-xs"
            >
              DESAFIOS
            </button>

            <button
              type="button"
              onClick={() => onNavigate("progresso")}
              className="shrink-0 border border-gray-700 px-3 py-2 text-xs"
            >
              PROGRESSO
            </button>

            <button
              type="button"
              onClick={() => onNavigate("conquistas")}
              className="shrink-0 border border-gray-700 px-3 py-2 text-xs"
            >
              CONQUISTAS
            </button>

            <button
              type="button"
              onClick={() => onNavigate("configuracoes")}
              className="shrink-0 border border-gray-700 px-3 py-2 text-xs"
            >
              CONFIG.
            </button>
          </div>

          {/* TÍTULO */}
          <div className="mb-8">
            <p className="mb-2 text-xs tracking-widest text-gray-600">
              OPERADOR: ESTUDANTE_01
            </p>

            <h2 className="text-2xl font-bold tracking-widest md:text-3xl">
              PAINEL DO ESTUDANTE
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Continue sua jornada de aprendizado em segurança digital.
            </p>
          </div>

          {/* XP */}
          <section
            aria-label="Experiência do estudante"
            className="mb-6 border border-gray-800 bg-[#101010] p-5 md:p-6"
          >
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest text-gray-500">
                  NÍVEL
                </p>
                <p className="mt-1 text-3xl font-bold">03</p>
              </div>

              <div className="text-right">
                <p className="text-xs tracking-widest text-gray-500">
                  EXPERIENCE POINTS
                </p>
                <p className="mt-1 text-sm">
                  {xp} / {xpProximoNivel} XP
                </p>
              </div>
            </div>

            <div
              className="h-2 border border-gray-700 bg-[#080808]"
              role="progressbar"
              aria-label="Progresso de experiência"
              aria-valuemin={0}
              aria-valuemax={xpProximoNivel}
              aria-valuenow={xp}
            >
              <div
                className="h-full bg-white"
                style={{ width: `${percentualXP}%` }}
              />
            </div>

            <p className="mt-3 text-[10px] tracking-widest text-gray-500">
              {xpProximoNivel - xp} XP PARA O PRÓXIMO NÍVEL
            </p>
          </section>

          {/* MÓDULOS */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-sm font-bold tracking-widest">
                MÓDULOS DE APRENDIZAGEM
              </h3>

              <button
                type="button"
                onClick={() => onNavigate("modulos")}
                className="text-[10px] tracking-widest text-gray-400 hover:text-white"
              >
                VER TODOS &gt;
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {modulos.map((modulo) => (
                <button
                  key={modulo.id}
                  type="button"
                  onClick={() => onNavigate("modulos")}
                  className="border border-gray-800 bg-[#101010] p-5 text-left transition hover:border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] tracking-widest text-gray-600">
                      MODULE_{modulo.id}
                    </p>
                    <span className="text-[10px] text-gray-500">
                      {modulo.progresso}%
                    </span>
                  </div>

                  <h4 className="mt-3 text-lg font-bold">
                    {modulo.titulo}
                  </h4>

                  <p className="mt-2 min-h-10 text-xs leading-5 text-gray-500">
                    {modulo.descricao}
                  </p>

                  <div className="mt-5 h-1 bg-[#080808]">
                    <div
                      className="h-full bg-white"
                      style={{ width: `${modulo.progresso}%` }}
                    />
                  </div>

                  <p className="mt-4 text-[10px] tracking-widest text-gray-400">
                    ACESSAR MÓDULO &gt;
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* DESAFIO RECOMENDADO */}
          <section className="border border-gray-700 bg-[#101010] p-5 md:p-6">
            <p className="text-[10px] tracking-[0.2em] text-gray-500">
              &gt; RECOMMENDED_CHALLENGE
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-bold tracking-widest md:text-xl">
                  DETECTE O PHISHING
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Analise uma situação e escolha a ação mais segura.
                </p>

                <p className="mt-3 text-[10px] tracking-widest text-gray-500">
                  RECOMPENSA DEMONSTRATIVA: +100 XP
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigate("desafio")}
                className="whitespace-nowrap bg-white px-6 py-3 text-xs font-bold tracking-widest text-black transition hover:bg-gray-300"
              >
                &gt; INICIAR DESAFIO
              </button>
            </div>
          </section>

          <footer className="mt-10 border-t border-gray-800 pt-5 text-[10px] tracking-widest text-gray-600">
            SECURITY_SMART // LEARN · PRACTICE · PROGRESS
          </footer>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
