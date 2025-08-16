"use client";

type Morador = {
  primeiroNome: string;
  sobrenome: string;
};

function formatarNomeMorador(m: Morador) {
  return `${m.primeiroNome} ${m.sobrenome}`;
}

function obterSaudacao(morador: Morador | null) {
  if (morador) {
    return <span>Olá, {formatarNomeMorador(morador)}!</span>;
  }
  return <span>Olá, Estranho!</span>;
}

export default function Home() {
  const element = <span>olá mundo, tudo bem?</span>;

  const morador: Morador = {
    primeiroNome: "sandro",
    sobrenome: "pereira",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">{element}</h1>
      <h1 className="text-4xl font-bold">{obterSaudacao(morador)}</h1>
    </div>
  );
}
