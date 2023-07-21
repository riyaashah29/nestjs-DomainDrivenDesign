import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://riyaa:riyaa@cluster0.3oboonb.mongodb.net/ddd')],
})
export class DatabaseModule {}
