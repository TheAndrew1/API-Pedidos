import { Module } from '@nestjs/common';
import { PedidoController } from './controllers/pedido/pedido.controller';
import { PedidoService } from './services/pedido/pedido.service';

@Module({
  imports: [],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class AppModule {}
