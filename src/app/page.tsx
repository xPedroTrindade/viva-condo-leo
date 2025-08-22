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
    <div id= "principal" className="min-h-screen flex items-center justify-center bg-black">
      <div id="componente-azul" className= "card-azul">
        <h1 id="name" className="text-2xl font-bold text-center">{obterSaudacao(null)}</h1>
      </div>
    </div>

  );
}
