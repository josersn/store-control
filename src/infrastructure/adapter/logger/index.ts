import { PinoService } from "./pino";

export interface ILoggerService {
  info(msg: string, ...args: any[]): void;
  error(msg: string, ...args: any[]): void;
  warn(msg: string, ...args: any[]): void;
}

export class Logger extends PinoService {
  constructor(label: string) {
    super(label);
  }
}
