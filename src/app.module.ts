import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@app/common/config/config.module';
import { DatabaseModule } from '@app/common/database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
