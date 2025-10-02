import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { AuthGuard } from 'src/common/auth-guard/auth.guard';
import { LoggingInterceptor } from 'src/common/logging.interceptor';
import { ValidateEmptyFieldsPipe } from 'src/common/pipes/validate-empty-fields.pipe';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @UseInterceptors(LoggingInterceptor)
  @UseGuards(AuthGuard)
  @UsePipes(new ValidateEmptyFieldsPipe(['title', 'description']))
  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @UseInterceptors(LoggingInterceptor)
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.certificatesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificatesService.update(+id, updateCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(+id);
  }
}
