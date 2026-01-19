import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}
  
  getProjectName(): string {
    return this.config.get('name') || 'NEST JS TASK 1'
  }
}
