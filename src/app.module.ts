import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';
import { HealthModule } from './modules/health/health.module';
import { QueueModule } from './modules/queue/queue.module';
import { SampleModule } from './modules/sample/sample.module';
import { TaskModule } from './modules/task/task.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.register({ folder: '.' }),
    HealthModule,
    SampleModule,
    // TaskModule,
    // QueueModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
