export class Usuario {
    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public habitos: number[],
        public desafiosId: number[],
        public emblemas= [],
        public logitude?: number,
        public latitude?: number

    ){}
}