import { Module } from '@nestjs/common';
import { QueueModule } from './modules/queue/queue.module';
import { SampleModule } from './modules/sample/sample.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [SampleModule, TaskModule, QueueModule],
})
export class AppModule {}
