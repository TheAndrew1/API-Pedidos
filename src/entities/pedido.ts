import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "./produto";
import { ProdutoDTO } from "src/dtos/produto.dto";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    cliente?: string;

    @Column()
    email?: string;

    @OneToMany(() => Produto, (produto) => produto.pedido, { cascade: true, onDelete: 'CASCADE' })
    itens?: Produto[];

    @Column()
    total?: number;

    @Column()
    status?: string;

    @CreateDateColumn()
    data_criacao?: Date;

    @UpdateDateColumn()
    data_atualizacao?: Date;

    constructor(
        id?: string,
        cliente?: string,
        email?: string,
        itens?: ProdutoDTO[],
        total?: number,
        status?: string,
        data_criacao?: Date,
        data_atualizacao?: Date
    ) {
        this.id = id;
        this.cliente = cliente;
        this.email = email;
        this.itens = itens?.map(item => new Produto(item.produto, item.quantidade, item.preco));
        this.total = total;
        this.status = status;
        this.data_criacao = data_criacao;
        this.data_atualizacao = data_atualizacao;
        ;
    }
}