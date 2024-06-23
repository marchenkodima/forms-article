import { observer } from "mobx-react";

import { FormControl } from "../utils";

type Props = {
  control: FormControl<string>;
};

export const Input = observer(({ control }: Props) => {
  return (
    <input
      value={control.value}
      onChange={(e) => control.value = e.target.value}
    />
  );
});
