export class Desafio {

	id: Number;
	titulo: String;
	descricao: String;
	categoria: String;
	pontuacao: Number;
	duracao: Number;
	status: String;
	arquivo?: Object;
	longitude?: String;
  latitude?: String;


	constructor (
		id: Number,
		titulo: String,
		descricao: String,
		categoria: String,
		pontuacao: Number,
		duracao: Number,
		status: String,
		arquivo?: Object,
		longitude?: String,
		latitude?: String) {
			this.id = id;
			this.titulo = titulo;
			this.descricao = descricao;
			this.categoria = categoria;
			this.pontuacao = pontuacao;
			this.duracao = duracao;
			this.status = status;
			this.arquivo = arquivo;
			this.latitude = latitude;
			this.longitude = longitude;
		}
}