export class Muda{

    constructor(
        public nome: string,
        public indiceGeral: number, // vai de 0 a 5
        public pontos: number,
        public arquivo: Object,
        public idMuda: number,
        public desafiosId?: string[]
    ){}
}       
