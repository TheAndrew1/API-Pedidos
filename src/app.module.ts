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
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'api_pedidos',
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
