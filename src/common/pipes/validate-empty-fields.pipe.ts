import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidateEmptyFieldsPipe implements PipeTransform<string> {
    constructor(private readonly fields: string[]) {}

    transform(value: string, _: ArgumentMetadata) {
        const emptyFields: string[] = [];

        for (const field of this.fields) {
            if(!value[field] || value[field].trim() === '') {
                emptyFields.push(field);
            }
        }

        if (emptyFields.length > 0) {
            throw new BadRequestException(`The following fields cannot be empty: ${emptyFields.join(', ')}`);
        }

        return value;
    }
}