import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { PedidoService } from '../services/pedido.service';

@Controller()
export class PedidoController {
  constructor(private readonly appService: PedidoService) {}

  @Get()
  findAll(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findById(@Param("id") id: string): string {
    console.log(id);
    return `Mensagem enviada ${id}`;
  }
}
