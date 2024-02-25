import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [UserModule, CategoriesModule, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
