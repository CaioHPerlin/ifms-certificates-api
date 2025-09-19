import { Injectable } from '@nestjs/common';

@Injectable()
export class IdGeneratorService {
    private currentId = 1;

    generateId(): number {
        return this.currentId++;
    }
}
