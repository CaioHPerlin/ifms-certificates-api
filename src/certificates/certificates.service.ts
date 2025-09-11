import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { Certificate } from './entities/certificate.entity';

@Injectable()
export class CertificatesService {
  private certificates: Certificate[] = [];
  private nextId = 1;

  create(createCertificateDto: CreateCertificateDto): Certificate {
  const certificate: Certificate = { id: this.nextId++, ...createCertificateDto };
    this.certificates.push(certificate);
    return certificate;
  }

  findAll(): Certificate[] {
    return this.certificates;
  }

  findOne(id: number): Certificate | undefined {
    return this.certificates.find(cert => cert.id === id);
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto): Certificate | undefined {
    const certificate = this.certificates.find(cert => cert.id === id);
    if (!certificate) return undefined;
    Object.assign(certificate, updateCertificateDto);
    return certificate;
  }
  
  remove(id: number): Certificate | undefined {
    const index = this.certificates.findIndex(cert => cert.id === id);
    if (index === -1) return undefined;
    return this.certificates.splice(index, 1)[0];
  }
}
