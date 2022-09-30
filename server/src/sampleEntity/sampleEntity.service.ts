import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SampleEntityServiceBase } from "./base/sampleEntity.service.base";

@Injectable()
export class SampleEntityService extends SampleEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
