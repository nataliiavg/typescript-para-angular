type heroi = {
  name: string;
  vulgo: string;
};

function printaObjetos(pessoa: heroi) {
  console.log(pessoa);
}

// isso printa um objeto
printaObjetos({
  name: "Bruce Wayne",
  vulgo: "Batman",
});
