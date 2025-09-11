import { Module } from '@nestjs/common';
import { CertificatesModule } from './certificates/certificates.module';
import { IdGeneratorService } from './common/id-generator/id-generator.service';

@Module({
  imports: [CertificatesModule],
  controllers: [],
  providers: [IdGeneratorService],
})
export class AppModule {}
