import { Test, TestingModule } from '@nestjs/testing';
import { PedidoMapper } from './pedido.mapper';

describe('PedidoMapper', () => {
  let service: PedidoMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoMapper],
    }).compile();

    service = module.get<PedidoMapper>(PedidoMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
