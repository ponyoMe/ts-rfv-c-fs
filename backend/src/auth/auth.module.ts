import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([Users]),
    ConfigModule,
    JwtModule.registerAsync({
     imports:[ConfigModule],
     inject:[ConfigService],
     useFactory: (config: ConfigService) =>({
      secret:config.get<string>('JWT_SECRET'),
      signOptions: {expiresIn:'1h'}
     })
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
