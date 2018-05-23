export class Muda{

    constructor(
        public idMuda: number,
        public nome: string,
        public indiceGeral: number, // vai de 0 a 5
        public arquivo: Object,
        public desafiosId?: string[]
        //A pontuação deve ir de 0 a 100
	    // começa em 50 pontos
    ){}
}       