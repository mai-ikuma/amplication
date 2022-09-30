import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SampleEntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="UserAddress" source="userAddress" />
        <TextInput label="UserName" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
