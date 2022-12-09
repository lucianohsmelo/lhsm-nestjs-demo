import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CustomStrategy } from './strategies/custom.strategy';
import { AuthGuard } from '@nestjs/passport';
import { CustomGuard } from './guards/custom-auth.guard';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';
import { LocalStrategy } from './strategies/local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(CustomGuard)
  @Roles(Role.Admin)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
