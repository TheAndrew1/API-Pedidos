import { Injectable } from '@nestjs/common';
import { PedidoDTO } from 'src/dtos/pedido.dto';
import { Pedido } from 'src/entities/pedido';

@Injectable()
export class PedidoMapper {
    convertToEntity(dto: PedidoDTO): Pedido {
        return new Pedido(dto.id, dto.cliente, dto.email, dto.itens, dto.total, dto.status, dto.data_criacao, dto.data_atualizacao);
    }

    convertToDTO(entity: Pedido): PedidoDTO {
        return new PedidoDTO(entity.id, entity.cliente, entity.email, entity.itens, entity.total, entity.status, entity.data_criacao, entity.data_atualizacao);
    }
}
