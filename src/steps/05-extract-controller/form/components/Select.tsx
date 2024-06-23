import { observer } from "mobx-react";

import { FormControl } from "../utils";

type Props = {
  control: FormControl<string>;
  children: React.ReactNode;
};

export const Select = observer(({ control, children }: Props) => {
  return (
    <select
      value={control.value}
      onChange={(e) => {
        control.value = e.target.value;
      }}
    >
      {children}
    </select>
  );
});
