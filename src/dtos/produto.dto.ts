export class ProdutoDTO {
    produto!: string;
    quantidade!: number;
    preco!: number;

    constructor(produto: string, quantidade: number, preco: number) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}