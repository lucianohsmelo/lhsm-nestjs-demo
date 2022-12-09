import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly appService: SampleService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }
}
