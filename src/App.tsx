
import { useState } from "react"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Modulos from "./pages/Modulos"
import Desafio from "./pages/Desafio"

export type Pagina =
  | "login"
  | "dashboard"
  | "modulos"
  | "desafio"
  | "progresso"
  | "conquistas"
  | "configuracoes"

function App() {
  const [pagina, setPagina] = useState<Pagina>("login")

  function navegar(destino: Pagina) {
  console.log("Navegação solicitada:", destino)
  setPagina(destino)
}

  if (pagina === "login") {
    return <Login onLogin={() => navegar("dashboard")} />
  }

  if (pagina === "modulos") {
    return (
      <Modulos
        onVoltar={() => navegar("dashboard")}
        onAbrirDesafio={() => navegar("desafio")}
      />
    )
  }

  if (pagina === "desafio") {
    return (
      <Desafio
        onVoltarModulos={() => navegar("modulos")}
        onVoltarDashboard={() => navegar("dashboard")}
      />
    )
  }

  if (pagina === "dashboard") {
    return <Dashboard onNavigate={navegar} />
  }

  const titulos: Record<string, string> = {
    progresso: "MEU_PROGRESSO",
    conquistas: "MINHAS_CONQUISTAS",
    configuracoes: "CONFIGURACOES_DO_SISTEMA",
  }

  return (
    <main className="min-h-screen bg-[#080808] p-8 text-white">
      <h1 className="text-xl font-bold tracking-widest">
        SECURITY_SMART
      </h1>

      <h2 className="mt-8 text-2xl font-bold">
        {titulos[pagina]}
      </h2>

      <p className="mt-3 text-sm text-gray-400">
        Seção em desenvolvimento.
      </p>

      <button
        onClick={() => navegar("dashboard")}
        className="mt-8 border border-gray-600 px-5 py-3 text-xs"
      >
        &lt; VOLTAR_AO_PAINEL
      </button>
    </main>
  )
}

export default App
