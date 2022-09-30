import { SampleEntity as TSampleEntity } from "../api/sampleEntity/SampleEntity";

export const SAMPLEENTITY_TITLE_FIELD = "userName";

export const SampleEntityTitle = (record: TSampleEntity): string => {
  return record.userName || record.id;
};
