import { Controller, Get } from "@nestjs/common";
import { LoggerService } from "./common/logger/logger.service";

@Controller()
export class AppController {
    constructor(private readonly logger: LoggerService) {}

    @Get('logs')
    findLogs(): { logs: string[] } {
        return { logs: this.logger.findLogs() };
    }
}