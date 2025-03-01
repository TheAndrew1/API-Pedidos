import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PedidoDTO } from 'src/dtos/pedido.dto';

@Controller("pedidos")
export class PedidoController {
  @Inject(PedidoService)
  private service: PedidoService;

  @Get()
  findAll(): PedidoDTO[] {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param("id") id: string): PedidoDTO {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() pedido: PedidoDTO) {
    return this.service.create(pedido);
  }

  @Patch(':id')
  updateStatus(@Param("id") id: string, @Body("status") status: string): any {
    return this.service.updateStatus(id, status);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param("id") id: string): void {
    this.service.delete(id);
  }
}
