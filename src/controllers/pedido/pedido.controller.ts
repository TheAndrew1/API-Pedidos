import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { PedidoService } from '../../services/pedido/pedido.service';
import { PedidoDTO } from 'src/dtos/pedido.dto';

@Controller("pedidos")
export class PedidoController {
  @Inject(PedidoService)
  private pedidoService: PedidoService;

  @Get()
  async findAll(): Promise<PedidoDTO[]> {
    return this.pedidoService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string):  Promise<PedidoDTO> {
    return this.pedidoService.findById(id);
  }

  @Post()
  async create(@Body() pedido: PedidoDTO): Promise<any> {
    return this.pedidoService.create(pedido);
  }

  @Patch(":id")
  async updateStatus(@Param("id") id: string, @Body("status") status: string): Promise<any> {
    return this.pedidoService.updateStatus(id, status);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string): Promise<void> {
    return this.pedidoService.delete(id);
  }
}
