import { Module } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from './users/users.service';
import { LocalStrategyService } from './local-strategy/local-strategy.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module(
  { 
    imports: [
      PassportModule,
      JwtModule.register(
        {
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }
        ),
    ],
    providers: [AuthService, LocalStrategyService, UsersService],
    controllers: [AuthController],
    exports: [AuthService],
  }
)
export class AuthModule {}