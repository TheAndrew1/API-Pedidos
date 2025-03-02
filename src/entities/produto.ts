import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    produto!: string;

    @Column()
    quantidade!: number;

    @Column()
    preco!: number;

    @ManyToOne(() => Pedido, (pedido) => pedido.itens)
    pedido!: Pedido;

    constructor(produto: string, quantidade: number, preco: number) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}