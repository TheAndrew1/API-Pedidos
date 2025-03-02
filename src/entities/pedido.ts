import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "./produto";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    cliente?: string;

    @Column()
    email?: string;

    @OneToMany(() => Produto, (produto) => produto.pedido, { cascade: true })
    itens?: Produto[];

    @Column()
    total?: number;

    @Column()
    status?: string;

    @CreateDateColumn()
    data_criacao?: Date;

    @UpdateDateColumn()
    data_atualizacao?: Date;
}