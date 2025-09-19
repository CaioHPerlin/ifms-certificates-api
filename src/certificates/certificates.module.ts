import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { IdGeneratorService } from 'src/common/id-generator/id-generator.service';
import { APP_NAME } from 'src/common/constants';
import { StartupDateProvider } from 'src/common/startup-date/startup-date.provider';
import { RequestScopedService } from 'src/common/request-scoped/request-scoped.service';

@Module({
  imports: [],
  controllers: [CertificatesController],
  providers: [
    CertificatesService,
    IdGeneratorService,
    StartupDateProvider,
    RequestScopedService,
    { provide: 'APP_NAME', useValue: APP_NAME },
  ],
})
export class CertificatesModule { }
