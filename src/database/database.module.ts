import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('MONGO_CONNENTION')],
})
export class DatabaseModule {}
