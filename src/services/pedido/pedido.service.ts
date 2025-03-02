import { PedidoMapper } from './../../mappers/pedido/pedido.mapper';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoDTO } from 'src/dtos/pedido.dto';
import { Pedido } from 'src/entities/pedido';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>;
    @Inject()
    private pedidoMapper: PedidoMapper;

    async findAll(): Promise<PedidoDTO[]> {
        let pedidos = await this.pedidoRepository.find();
        return pedidos.map(({id, cliente, total, status}) => (new PedidoDTO(id, cliente, undefined, undefined, total, status)));
    }

    async findById(id: string): Promise<PedidoDTO> {
        let pedido = await this.pedidoRepository.findOne({where: { id: id }, relations: { itens: true }})
        if(!pedido) {
            throw new NotFoundException("Pedido não encontrado");
        }
        return this.pedidoMapper.convertToDTO(pedido);
    }

    async create(pedido: PedidoDTO): Promise<any> {
        pedido.status = "PENDENTE";
        pedido.total = pedido.itens?.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0) || 0;
        let pedidoSalvo = await this.pedidoRepository.save(this.pedidoMapper.convertToEntity(pedido));
        return { id: pedidoSalvo.id, status: pedidoSalvo.status, total: pedidoSalvo.total, data_criacao: pedidoSalvo.data_criacao };
    }

    async updateStatus(id: string, status: string): Promise<any> {
        let pedido = await this.pedidoRepository.findOneBy({id: id})
        if(!pedido) {
            throw new NotFoundException("Pedido não encontrado");
        }
        pedido.status = status;
        let pedidoSalvo = await this.pedidoRepository.save(this.pedidoMapper.convertToEntity(pedido));
        return {
            message: "Pedido atualizado com sucesso",
            status: pedidoSalvo.status
        };
    }

    async delete(id: string): Promise<void> {
        let pedido = await this.pedidoRepository.findOne({where: { id: id }, relations: { itens: true }})
        if(!pedido) {
            throw new NotFoundException("Pedido não encontrado");
        }
        await this.pedidoRepository.remove(pedido);
    }
}
