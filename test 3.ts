interface Entidade {
  id: number

}

interface Usuario extends Entidade {

    id: number
    nome: string
    idade: number
}

interface BancoDeDados {

   inserir: (entidade: Entidade) => void 

}


class BancoOracle implements BancoDeDados {
    inserir(entidade: Entidade) {
//...
    }
}


class BancoFake implements BancoDeDados {

    inserir(entidade: Entidade){
//...
    }
}

// injetar a indepedência de parâmetro (linha abaixo)
function salvar(usuario: Usuario, db: BancoDeDados = new BancoOracle()) {
// const db: BancoOracle = new BancoOracle()
db.inserir(usuario)


}