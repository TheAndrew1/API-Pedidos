import { Injectable } from '@nestjs/common';
import { PedidoDTO } from 'src/dtos/pedido.dto';

@Injectable()
export class PedidoService {
    findAll(): PedidoDTO[] {
        let pedidos: PedidoDTO[] = [];
        pedidos = pedidos.map(({id, cliente, total, status}) => ({id, cliente, total, status}));
        return pedidos;
    }

    findById(id: string): PedidoDTO {
        return {} as PedidoDTO;
    }

    create(pedido: PedidoDTO) {
        pedido.data_criacao = new Date();
        pedido.status = "PENDENTE";
        pedido.total = pedido.itens?.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0) || 0;
        return {
            id: pedido.id,
            status: pedido.status,
            total: pedido.total,
            data_criacao: pedido.data_criacao
        }
    }

    updateStatus(id: string, status: string) {
        let pedido = new PedidoDTO();
        pedido.status = status;
        return {
            message: "Pedido atualizado com sucesso",
            status: pedido.status
        };
    }

    delete(id: string) {
        
    }
}
