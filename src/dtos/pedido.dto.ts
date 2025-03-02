import { ProdutoDTO } from "./produto.dto";
import { Produto } from "src/entities/produto";

export class PedidoDTO {
    id?: string;
    cliente?: string;
    email?: string;
    itens?: ProdutoDTO[];
    total?: number;
    status?: string;
    data_criacao?: Date;
    data_atualizacao?: Date;

    constructor(
        id?: string,
        cliente?: string,
        email?: string,
        itens?: Produto[],
        total?: number,
        status?: string,
        data_criacao?: Date,
        data_atualizacao?: Date
    ) {
        this.id = id;
        this.cliente = cliente;
        this.email = email;
        this.itens = itens?.map(item => new ProdutoDTO(item.produto, item.quantidade, item.preco));
        this.total = total;
        this.status = status;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
        ;
    }
}