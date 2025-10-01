import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmitLogin(event) {
    event.preventDefault();

    const dataLogin = {
      email,
      senha,
    };
    console.log(dataLogin);
    console.log("Enviar para BackEnd");
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="https://logopng.com.br/logos/olx-104.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Entrar na sua conta
            </h3>
            <p className="">
              Não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmitLogin} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              // required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Senha</label>
            <input
              type="password"
              name="senha"
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
              // required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button
            type="submit"
            className={
              "w-full px-4 py-2 text-white font-medium bg-[#6F0AD6] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            }
          >
            Entrar
          </button>
          <div className="text-center">
            <a href="javascript:void(0)" className="hover:text-indigo-600">
              Esqueceu a Senha?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
