import { Test, TestingModule } from '@nestjs/testing';
import { TranzactionsService } from './tranzactions.service';

describe('TranzactionsService', () => {
  let service: TranzactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranzactionsService],
    }).compile();

    service = module.get<TranzactionsService>(TranzactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
