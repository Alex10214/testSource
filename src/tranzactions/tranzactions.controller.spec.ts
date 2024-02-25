import { Test, TestingModule } from '@nestjs/testing';
import { TranzactionsController } from './tranzactions.controller';
import { TranzactionsService } from './tranzactions.service';

describe('TranzactionsController', () => {
  let controller: TranzactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranzactionsController],
      providers: [TranzactionsService],
    }).compile();

    controller = module.get<TranzactionsController>(TranzactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
