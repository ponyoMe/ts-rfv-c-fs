import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './auth/users.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (config:ConfigService)=>({
          type:'postgres',
         host:'localhost',
         port:5432,
         username:'postgres',
         password:'password',
         database:'users',
         entities:[Users],
        synchronize:true
      })
     
    }),
    AuthModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
