import { Module } from '@nestjs/common';
import { SampleModule } from './modules/sample/sample.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [SampleModule, TaskModule],
})
export class AppModule {}
