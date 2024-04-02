import Image from "next/image";

export default function Home() {
  return (
    <section className="justify-center flex h-[100vh] w-full items-center bg-[#2D142C]">
      <div className={`flex bg-zinc-700 flex-col w-[30vw] h-[30vh] gap-10`}>
        <h1 className="text-black text-center">
          Seja bem vindo novamente! <br /> Faça o login para continuar
        </h1>
        <div className="flex justify-center flex-col text-black">
          <label htmlFor="">Digite seu email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <label htmlFor="">Digite sua senha</label>
          <input
            type="text"
            className="text-black border-black border-solid border"
          />
        </div>
      </div>
    </section>
  );
}
