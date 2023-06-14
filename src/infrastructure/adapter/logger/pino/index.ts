import pino, { Logger } from "pino";
import { ILoggerService } from "..";

class PinoService implements ILoggerService {
  private logger: Logger;

  constructor(private label: string) {
    this.logger = pino({
      level: process.env.LOG_LEVEL,
      formatters: {
        level: (level) => ({ level }),
      },
      timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
      ...(process.env.NODE_ENV === "development" && {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            levelFirst: true,
            ignore: "time,pid,hostname",
          },
        },
      }),
    });
  }

  info(msg: string, ...args: any[]): void {
    this.logger.info({
      message: msg,
      severity: "INFO",
      args,
      domain: this.label,
    });
  }

  async error(msg: string, ...args: any[]): Promise<void> {
    this.logger.error({
      message: msg,
      severity: "ERROR",
      args,
      domain: this.label,
    });
  }

  warn(msg: string, ...args: any[]): void {
    this.logger.warn({
      message: msg,
      severity: "WARN",
      args,
      domain: this.label,
    });
  }
}

export { PinoService };
