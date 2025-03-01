import { ProdutoDTO } from "./produtoDTO";

export class PedidoDTO {
    id!: string;
    cliente!: string;
    email!: string;
    itens!: ProdutoDTO[];
    total!: number;
    status!: string;
    data_criacao!: Date;
    data_atualizacao!: Date;
}