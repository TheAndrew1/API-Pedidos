import { Module } from '@nestjs/common';
import { PedidoController } from './controllers/pedido/pedido.controller';
import { PedidoService } from './services/pedido/pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido';
import { Produto } from './entities/produto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'api-pedidos.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pedido, Produto])
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
  exports: []
})
export class AppModule {}
