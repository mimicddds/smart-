type LoginProps = {
  onLogin: () => void
}

function Login({ onLogin }: LoginProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6">

      <section className="w-full max-w-md">

        {/* CABEÇALHO */}
        <div className="mb-10">

          <p className="text-xs tracking-[0.35em] text-gray-500 mb-3">
            SYSTEM // AUTHENTICATION
          </p>

          <h1 className="text-4xl font-bold tracking-[0.12em]">
            SECURITY<span className="text-gray-500">_</span>SMART
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            TRANSFORMANDO CONHECIMENTO EM SEGURANÇA
          </p>

        </div>


        {/* CADASTRO */}
        <div className="border border-gray-700 bg-[#101010] p-6">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-lg font-bold tracking-widest">
              CRIAR_CONTA
            </h2>

            <span className="text-xs text-gray-500">
              [ NEW_USER ]
            </span>

          </div>


          {/* NOME */}
          <div className="mb-5">

            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              NOME_COMPLETO
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full bg-[#080808] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-white transition"
            />

          </div>


          {/* EMAIL */}
          <div className="mb-5">

            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              E-MAIL
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-[#080808] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-white transition"
            />

          </div>


          {/* SENHA */}
          <div className="mb-5">

            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              SENHA
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full bg-[#080808] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-white transition"
            />

          </div>


          {/* CONFIRMAR SENHA */}
          <div className="mb-7">

            <label className="block text-xs tracking-widest text-gray-400 mb-2">
              CONFIRMAR_SENHA
            </label>

            <input
              type="password"
              placeholder="Confirme sua senha"
              className="w-full bg-[#080808] border border-gray-700 px-4 py-3 text-sm text-white outline-none focus:border-white transition"
            />

          </div>


          {/* TERMOS */}
          <label className="flex items-start gap-3 text-xs text-gray-500 mb-7 cursor-pointer">

            <input
              type="checkbox"
              className="mt-0.5 accent-white"
            />

            <span>
              ACEITO OS TERMOS DE USO E A POLÍTICA DE PRIVACIDADE
            </span>

          </label>


          {/* BOTÃO */}
          <button
            type="button"
            onClick={onLogin}
            className="w-full bg-white text-black py-3 font-bold tracking-widest text-sm hover:bg-gray-300 transition"
          >
            &gt; CRIAR_CONTA
          </button>


          {/* LOGIN */}
          <p className="text-center text-xs text-gray-500 mt-6">

            JÁ POSSUI UMA CONTA?{" "}

            <button
              type="button"
              className="text-white hover:underline"
            >
              ENTRAR
            </button>

          </p>

        </div>


        {/* STATUS */}
        <div className="flex justify-between mt-5 text-[10px] tracking-widest text-gray-600">

          <span>
            SECURITY_SMART v0.1
          </span>

          <span>
            SYSTEM_ONLINE
          </span>

        </div>

      </section>

    </main>
  )
}

export default Login