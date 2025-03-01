import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PedidoDTO } from 'src/dtos/pedido.dto';

@Controller("pedidos")
export class PedidoController {
  @Inject(PedidoService)
  service: PedidoService;

  @Get()
  findAll(): PedidoDTO[] {
    return [new PedidoDTO()];
  }

  @Get(':id')
  findById(@Param("id") id: string): PedidoDTO {
    console.log(id);
    return new PedidoDTO();
  }

  @Post()
  create(@Body() pedido: PedidoDTO) {
    return pedido;
  }

  @Patch(':id')
  updateStatus(@Param("id") id: string, @Body("status") status: string): any {
    console.log(id);
    return {
      message: "Pedido atualizado com sucesso",
      status: status
    };
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param("id") id: string): void {
    console.log(id);
  }
}
