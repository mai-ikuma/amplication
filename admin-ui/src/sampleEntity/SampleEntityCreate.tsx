import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SampleEntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="UserAddress" source="userAddress" />
        <TextInput label="UserName" source="userName" />
      </SimpleForm>
    </Create>
  );
};
