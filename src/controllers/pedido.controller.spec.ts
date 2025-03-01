import { Test, TestingModule } from '@nestjs/testing';
import { PedidoController } from './pedido.controller';
import { PedidoService } from '../services/pedido.service';

describe('PedidoController', () => {
  let pedidoController: PedidoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PedidoController],
      providers: [PedidoService],
    }).compile();

    pedidoController = app.get<PedidoController>(PedidoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pedidoController.findAll()).toBe('Hello World!');
    });
  });
});
