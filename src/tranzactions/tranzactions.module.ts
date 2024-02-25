import { Module } from '@nestjs/common';
import { TranzactionsService } from './tranzactions.service';
import { TranzactionsController } from './tranzactions.controller';

@Module({
  controllers: [TranzactionsController],
  providers: [TranzactionsService],
})
export class TranzactionsModule {}
