/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, SampleEntity } from "@prisma/client";

export class SampleEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SampleEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityFindManyArgs>
  ): Promise<number> {
    return this.prisma.sampleEntity.count(args);
  }

  async findMany<T extends Prisma.SampleEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityFindManyArgs>
  ): Promise<SampleEntity[]> {
    return this.prisma.sampleEntity.findMany(args);
  }
  async findOne<T extends Prisma.SampleEntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityFindUniqueArgs>
  ): Promise<SampleEntity | null> {
    return this.prisma.sampleEntity.findUnique(args);
  }
  async create<T extends Prisma.SampleEntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityCreateArgs>
  ): Promise<SampleEntity> {
    return this.prisma.sampleEntity.create<T>(args);
  }
  async update<T extends Prisma.SampleEntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityUpdateArgs>
  ): Promise<SampleEntity> {
    return this.prisma.sampleEntity.update<T>(args);
  }
  async delete<T extends Prisma.SampleEntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleEntityDeleteArgs>
  ): Promise<SampleEntity> {
    return this.prisma.sampleEntity.delete(args);
  }
}
