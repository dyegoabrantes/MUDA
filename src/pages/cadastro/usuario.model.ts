export class Usuario {
    constructor(
        public nome: string,
        public email: string,
        public senha: string,
        public habitos: number[],
        public emblemas= [],
        public desafiosId?: [{desafioId: Number, status: String}],
        public logitude?: number,
        public latitude?: number,
        public _id?: string

    ){}
}