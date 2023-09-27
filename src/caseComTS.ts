type Hero = {
  nome: string;
  vulgo: string;
  telefone: string;
};

function ligarPara(heroi: Hero): string {
  return "Ligando para: " + heroi.telefone;
}

ligarPara({
  nome: "Natalia",
  vulgo: "Mulher Maravilha",
  telefone: "11 317156999",
});
