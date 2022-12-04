import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { QueueModule } from './modules/queue/queue.module';
import { SampleModule } from './modules/sample/sample.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    SampleModule,
    // TaskModule,
    // QueueModule,
    AuthModule,
  ],
})
export class AppModule {}
