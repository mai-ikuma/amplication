import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SampleEntityResolverBase } from "./base/sampleEntity.resolver.base";
import { SampleEntity } from "./base/SampleEntity";
import { SampleEntityService } from "./sampleEntity.service";

@graphql.Resolver(() => SampleEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SampleEntityResolver extends SampleEntityResolverBase {
  constructor(
    protected readonly service: SampleEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
