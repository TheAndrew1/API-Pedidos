import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { PedidoService } from '../services/pedido.service';
import { PedidoDTO } from 'src/dtos/pedidoDTO';

@Controller("pedidos")
export class PedidoController {
  constructor(private readonly appService: PedidoService) {}

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
