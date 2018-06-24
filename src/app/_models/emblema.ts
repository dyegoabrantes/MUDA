export class Emblema{

    id: number;
    arquivo: string;
    nivel: number;
    potuacao: number;
    categoria: string; 

    constructor (
        id: number,
        arquivo: string,
        nivel: number,
        potuacao: number,
        categoria: string ,
    ){
        this.id = id;
        this.arquivo = arquivo;
        this.nivel = nivel;
        this.potuacao = potuacao;
        this.categoria = categoria;
    }
}