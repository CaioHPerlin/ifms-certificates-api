import { Module } from '@nestjs/common';
import { CertificatesModule } from './certificates/certificates.module';
import { IdGeneratorService } from './common/id-generator/id-generator.service';
import { RequestScopedService } from './common/request-scoped/request-scoped.service';
import { AppController } from './app.controller';
import { LoggerModule } from './common/logger/logger.module';

@Module({
  imports: [LoggerModule, CertificatesModule],
  controllers: [AppController],
  providers: [IdGeneratorService, RequestScopedService],
})
export class AppModule {}
