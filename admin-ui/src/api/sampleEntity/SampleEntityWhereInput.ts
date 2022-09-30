import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SampleEntityWhereInput = {
  id?: StringFilter;
  userAddress?: StringNullableFilter;
  userName?: StringNullableFilter;
};
