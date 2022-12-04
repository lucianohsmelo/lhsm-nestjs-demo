import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('queue')
export class QueueController {
  constructor(
    @InjectQueue('processor') private readonly processorQueue: Queue,
  ) {}
  @Get()
  async createJob(): Promise<void> {
    const job = await this.processorQueue.add({});
    console.log(await job.getState());
  }
}
