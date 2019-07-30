import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as config from 'config'

export class ConfigService {
  private readonly envConfig;

  constructor(filePath: string) {
    this.envConfig = config
  }

  get(key: string): string {
    return this.envConfig.get(key);
  }
}