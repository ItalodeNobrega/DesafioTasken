import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
