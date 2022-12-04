import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
