import { Inject, Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { IdGeneratorService } from 'src/common/id-generator/id-generator.service';
import { LoggerService } from 'src/common/logger/logger.service';

@Injectable()
export class CertificatesService {
  private certificates: Certificate[] = [];

  constructor(
    private readonly idGenerator: IdGeneratorService,
    // private readonly requestScoped: RequestScopedService,
    private readonly logger: LoggerService,
    @Inject("APP_NAME") private readonly appName: string,
    @Inject("STARTUP_DATE") private readonly startupDate: string,
  ) {}

  create(createCertificateDto: CreateCertificateDto): Certificate {
    const certificate: Certificate = { id: this.idGenerator.generateId(), ...createCertificateDto };
    this.certificates.push(certificate);
    this.logger.log(`Creating a new certificate (id=${certificate.id})`);
    return certificate;
  }
  ''
  findAll(): Certificate[] {
    // this.logger.log(`App Name: ${this.appName}`);
    // this.logger.log(`Startup Date: ${this.startupDate}`);
    // this.logger.log(`Request Timestamp: ${this.requestScoped.getTimestamp()}`);

    this.logger.log(`Finding all certificates`);
    return this.certificates;
  }

  findOne(id: number): Certificate | undefined {
    this.logger.log(`Finding certificate with ID: ${id}`);
    return this.certificates.find(cert => cert.id === id);
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto): Certificate | undefined {
    this.logger.log(`Updating certificate with ID: ${id}`);
    const certificate = this.certificates.find(cert => cert.id === id);
    if (!certificate) return undefined;
    Object.assign(certificate, updateCertificateDto);
    return certificate;
  }

  remove(id: number): Certificate | undefined {
    this.logger.log(`Removing certificate with ID: ${id}`);
    const index = this.certificates.findIndex(cert => cert.id === id);
    if (index === -1) return undefined;
    return this.certificates.splice(index, 1)[0];
  }
}
