export class Emblema{

    id: number;
    arquivo: string;
    nivel: number;
    pontuacao: number;
    categoria: string; 

    constructor (
        id: number,
        arquivo: string,
        nivel: number,
        pontuacao: number,
        categoria: string ,
    ){
        this.id = id;
        this.arquivo = arquivo;
        this.nivel = nivel;
        this.pontuacao = pontuacao;
        this.categoria = categoria;
    }
}