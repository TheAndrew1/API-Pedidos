import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { PedidoService } from '../services/pedido.service';

@Controller()
export class PedidoController {
  constructor(private readonly appService: PedidoService) {}

  @Get()
  @HttpCode(202)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':teste')
  receiveMessage(@Param("teste") mensagem: string): string {
    console.log(mensagem);
    return `Mensagem enviada ${mensagem}`;
  }
}
