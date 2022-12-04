import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('processor')
export class QueueProcessor {
  private readonly logger = new Logger(QueueProcessor.name);

  @Process()
  handleProcess(job: Job) {
    this.logger.debug('Start process...');
    this.logger.debug(job.data);
    this.logger.debug('Process completed');
  }
}
