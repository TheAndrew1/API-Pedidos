import { produtoDTO } from "./produtoDTO";

export class pedidoDTO {
    id!: string;
    cliente!: string;
    email!: string;
    itens!: produtoDTO[];
    total!: number;
    status!: string;
    data_criacao!: Date;
    data_atualizacao!: Date;
}