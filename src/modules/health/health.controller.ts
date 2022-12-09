import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @Get('disk')
  @HealthCheck()
  distkCheck() {
    return this.disk.checkStorage('storage', {
      path: '/',
      thresholdPercent: 0.5,
    });
  }

  @Get('memory')
  @HealthCheck()
  memoryCheck() {
    return this.memory.checkHeap('memory_heap', 150 * 1024 * 1024);
  }
}
