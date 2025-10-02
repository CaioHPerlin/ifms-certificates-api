import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string, _: ArgumentMetadata) {
        const parsed = +value;
        if(isNaN(parsed)) {
            throw new BadRequestException(`The value '${value}' is not a valid number`)
        }
        return parsed;
    }
}