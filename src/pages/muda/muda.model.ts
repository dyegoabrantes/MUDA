export class Muda{

    constructor(
        public pontos: number,
        public idMuda: number,
        public nome: string,
        public indiceGeral: number, // vai de 0 a 5
        public arquivo: Object,
        public desafiosId?: string[]
    ){}
}       