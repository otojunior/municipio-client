export class Municipio {
    constructor(
        public id: number,
        public nome: string,
        public cep: string,
        public descricao: string,
        public populacao: number
    ) {}
}
