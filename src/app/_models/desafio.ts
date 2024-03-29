export class Desafio {

	id: Number;
	titulo: String;
	descricao: String;
	categoria: String;
	pontuacao: Number;
	duracao: Number;
	status: String;
	arquivoA?: String;
	arquivoB?: String;
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
		arquivoA?: String,
		arquivoB?: String,
		longitude?: String,
		latitude?: String) {
			this.id = id;
			this.titulo = titulo;
			this.descricao = descricao;
			this.categoria = categoria;
			this.pontuacao = pontuacao;
			this.duracao = duracao;
			this.status = status;
			this.arquivoA = arquivoA;
			this.arquivoB = arquivoB;
			this.latitude = latitude;
			this.longitude = longitude;
		}
}