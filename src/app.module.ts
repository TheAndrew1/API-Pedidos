import { Module } from '@nestjs/common';
import { PedidoController } from './controllers/pedido/pedido.controller';
import { PedidoService } from './services/pedido/pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido';
import { Produto } from './entities/produto';
import { PedidoMapper } from './mappers/pedido/pedido.mapper';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'api_pedidos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pedido, Produto])
  ],
  controllers: [PedidoController],
  providers: [PedidoService, PedidoMapper],
  exports: []
})
export class AppModule {}
