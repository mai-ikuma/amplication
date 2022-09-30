import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SampleEntityService } from "./sampleEntity.service";
import { SampleEntityControllerBase } from "./base/sampleEntity.controller.base";

@swagger.ApiTags("sampleEntities")
@common.Controller("sampleEntities")
export class SampleEntityController extends SampleEntityControllerBase {
  constructor(
    protected readonly service: SampleEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
