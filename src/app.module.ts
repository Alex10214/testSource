import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import { DealsModule } from './deals/deals.module';
import { TranzactionsModule } from './tranzactions/tranzactions.module';
import { TestModule } from './test/test.module';
import { Test2Module } from './test2/test2.module';

@Module({
  imports: [UserModule, CategoriesModule, DealsModule, TranzactionsModule, TestModule, Test2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
