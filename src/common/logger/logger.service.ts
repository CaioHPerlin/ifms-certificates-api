import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    private readonly logs: string[] = [];

    private generateLogMessage(message: string): string {
        return `[Logger - ${new Date().toISOString()}]: ${message}`;
    }

    log(message: string) {
        const logMessage = this.generateLogMessage(message);
        console.log(logMessage);
        this.logs.push(logMessage);
    }

    findLogs(): string[] {
        return [...this.logs];
    }
}
